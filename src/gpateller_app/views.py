from django.shortcuts import redirect,render
from django.http import HttpResponse
from django.utils.datastructures import MultiValueDictKeyError
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError

from gpateller_app.models import *  


#lang #0 = en / 1 = tr

#main page for authenticated users
@login_required(login_url='/')
def home_view(request):
	username = request.user.username
	user_ = request.user
	user_stat = User_Statistics.objects.get(user=user_)
	table_count = user_stat.table_count
	lang = user_stat.language
	table_ids = User_Tables.objects.filter(user=user_).values()
	save_contexts = ""
	for i in range (0,table_count):
		table_no = table_ids[i]['table_id']
		table_entries = Course_Table.objects.filter(user=user_, table_no=table_no).values()
		save_context = "<table id="+ str(table_no) + "><tr><th>CourseName </th><th>Credits </th><th>Grades</th>"
		for j in table_entries:
			save_context +=  "<tr><td>" + j['course_name'].upper() + "</td><td>" + str(j['course_credit']) +"</td><td>" + str(j['course_letter']) +"</tr>"
		gpa = table_ids[i]['gpa']
		cgpa = table_ids[i]['cgpa']
		if cgpa==0:
			cgpa = gpa
		if lang==0:
			if gpa >= 3.5:
				stand = "High Honour"
			elif gpa >= 3:
				stand = "Honour"
			elif gpa >= 2:
				stand = "Satisfactory"
			elif gpa == 0:
				stand = "Not Calculated"
			else:
				stand = "Fucked up"
		else:
			if gpa >= 3.5:
				stand = "Yuksek Seref"
			elif gpa >= 3:
				stand = "Seref"
			elif gpa >= 2:
				stand = "Yeterli"
			elif gpa == 0:
				stand = "Hesaplamadin"
			else:
				stand = "Sictin"
		save_context += "<tr><th colspan='1'>CGPA: " + str(cgpa) + "</th><th colspan='1'>GPA: " + str(gpa) + "</th><th colspan='1'>Stand: " + stand + "</th></tr>"
		if lang == 0:
			save_context += "</table><br><input type='button' name='Edit' id='e" + str(table_no) + "' class='btn-style2' onClick='edit(" + str(table_no) + ");' value='Edit' style='height:30px; width:132px'><button type='submit' name='Delete' id='d" + str(table_no) + "' class='btn-style2' value=" + str(table_no) + " style='height:30px; width:132px'>Delete</button><br><br><br><br>"
		else:
			save_context += "</table><br><input type='button' name='Edit' id='e" + str(table_no) + "' class='btn-style2' onClick='edit(" + str(table_no) + ");' value='Duzenle' style='height:30px; width:132px'><button type='submit' name='Delete' id='d" + str(table_no) + "' class='btn-style2' value=" + str(table_no) + " style='height:30px; width:132px'>Sil</button><br><br><br><br>"
		save_contexts += save_context
	if lang == 0:
		return render(request, "en/home.html", {'message' : "Hi, "+username, 'saves' : save_contexts}) 
	else:
		return render(request, "tr/home.html", {'message' : "Merhaba, "+username, 'saves' : save_contexts})


#main page for guests
def login_view(request):
	return render(request, "en/entrance.html", {})

 
def login_post_tr(request):
	context = {}
	user = None 
	try:
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(username=username, password=password)
	except MultiValueDictKeyError:
		user = None
	# check for authentication
	if user is not None: 
		if user.is_active:
			login(request, user)
			return redirect('/home') 
		else: #disabled account 
			#return redirect('/login_err')
			return render(request, "tr/entrance.html", {'login_err':'Istenmiyorsun, defol git buradan'})				
	else:
		# Return an 'invalid login' error message.
		#return redirect('/login_err')
		return render(request, "tr/entrance.html", {'login_err':'Olmadi'})
			

def login_post_en(request):
	context = {}
	user = None 
	try:
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(username=username, password=password)
	except MultiValueDictKeyError:
		user = None
	# check for authentication
	if user is not None: 
		if user.is_active:
			login(request, user)
			return redirect('/home') 
		else: #disabled account 
			#return redirect('/login_err')	
			return render(request, "en/entrance.html", {'login_err':'You are banned, my friend'}) 				
	else:
		# Return an 'invalid login' error message.
		#return redirect('/login_err')	
		return render(request, "en/entrance.html", {'login_err':'Invalid username or password'}) 
 

def signup_view_tr(request):  
	context = { } 
	return render(request, "tr/signup.html", context)  


def signup_view_en(request):  
	context = { }  
	return render(request, "en/signup.html", context) 


def signup_post_tr(request):   
	username = request.POST['username']
	password = request.POST['password']
	email = request.POST['email']
	try:
		user = User.objects.create_user(username, email, password)
	except IntegrityError:
		return render(request, "tr/signup.html", {'err_message' : "Kullanici adi alinmis"})
	if email_check(user):
		user.is_active = True
		user.save()
		user_stat = User_Statistics.objects.create(user=user, table_count=0, table_id_to_give_next=0, language=0)
		user_stat.save()
		user = authenticate(username=username, password=password)
		if user is not None:
			login(request, user)
			return redirect('/home')
		else:
			return redirect('/home')
	else:
		return render(request, "tr/signup.html", {'err_message' : "Gecerli 1 e-posta adresi girin"})


def signup_post_en(request):   
	username = request.POST['username']
	password = request.POST['password']
	email = request.POST['email']
	try:
		user = User.objects.create_user(username, email, password)
	except IntegrityError:
		return render(request, "en/signup.html", {'err_message' : "Username is already in use"}) 
	if email_check(user):
		user.is_active = True
		user.save()
		user_stat = User_Statistics.objects.create(user=user, table_count=0, table_id_to_give_next=0, language=0)
		user_stat.save()
		user = authenticate(username=username, password=password)
		if user is not None:
			login(request, user)
			return redirect('/home')
		else:
			return redirect('/home')
	else:
		return render(request, "en/signup.html", {'err_message' : "Email address error"})
		
	
@login_required(login_url='/')
def logout_view(request):
	'''Simply logout'''
	user_ = request.user
	user_stat = User_Statistics.objects.get(user=user_)
	lang = user_stat.language
	logout(request)
	if lang==0:
		return render(request, "en/entrance.html", {}) 
	else:
		return render(request, "tr/entrance.html", {})

#no need, for now at least...
def email_check(user):
	#return user.email.endswith('@example.com')
	return True

def set_lang_tr(request):
	if request.user.is_anonymous():
		return render(request, "tr/entrance.html", {}) 
	else:
		user_ = request.user
		user_stat = User_Statistics.objects.get(user=user_)
		user_stat.language = 1
		user_stat.save()
		return redirect('/home')


def set_lang_en(request):
	if request.user.is_anonymous():
		return render(request, "en/entrance.html", {})
	else:
		user_ = request.user
		user_stat = User_Statistics.objects.get(user=user_)
		user_stat.language = 0
		user_stat.save()
		return redirect('/home')


@login_required(login_url='/')
def save(request):
	try:	
		user_ = request.user
		user_stat = User_Statistics.objects.get(user=user_)
		table_count = user_stat.table_count
		lang = user_stat.language
		table_no = user_stat.table_id_to_give_next
		if table_count<3: #an error message should be shown otherwise
			entry_count = request.POST.get('entry_count')
			for i in range(0,int(entry_count)):
				coursename = request.POST.get('CourseNames'+str(i))
				credit = request.POST.get('Credits'+str(i))
				grade = request.POST.get('Grades'+str(i))
				table = Course_Table.objects.create(user=user_, row_no=i, course_name=coursename, course_credit=credit, course_letter=grade, table_no=table_no)
				table.save()
			gpa = request.POST.get('gpa')
			cgpa = request.POST.get('cgpa')
			user_table = User_Tables.objects.create(user=user_, table_id= table_no, gpa=gpa, cgpa=cgpa)
			user_table.save()	
			table_count += 1
			table_no += 1
			user_stat.table_count = table_count
			user_stat.table_id_to_give_next = table_no
			user_stat.save()			
	except MultiValueDictKeyError:
		if lang==0:
			print "An error occurred while saving"
		else:
			print "Kaydedemedik"
	return redirect('/home')


@login_required(login_url='/')
def delete(request):
	user_ = request.user
	user_stat = User_Statistics.objects.get(user=user_)
	table_count = user_stat.table_count
	table_count -= 1 #one less table
	user_stat.table_count = table_count #update table count info
	user_stat.save()
	table_no = request.POST.get('Delete')
	User_Tables.objects.get(user=user_, table_id=table_no).delete()
	Course_Table.objects.filter(user=user_, table_no=table_no).delete()
	return redirect('/home')

#run get_oibs_info.py first, then call this function
def update_OIBS_info(request):
	DBconnection = sqlite3.connect("OIBS_info.db")
	c = DBconnection.cursor()
	c.execute('''SELECT * FROM Course''')
	courses = c.fetchall() #returns list of 3_tuples
	#for course in courses:
		