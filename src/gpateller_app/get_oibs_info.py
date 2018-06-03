import codecs
import re
from selenium import webdriver   
import sqlite3


key = 	"<td><font face=\"ARIAL\">"
length = len(key) 
wholeWhole = [] 

#Save to database
DBconnection = sqlite3.connect("OIBS_info.db")
c = DBconnection.cursor()

#c.execute("DROP TABLE Course;")
#c.execute("DROP TABLE Section;")		
#DBconnection.commit()

c.execute('''CREATE TABLE IF NOT EXISTS Course(
				cid VARCHAR(7),
				coursename VARCHAR(50),
				section_count INTEGER,
				PRIMARY KEY(cid));''')
#1->monday
#2->tuesday
#3->wednesday
#4->thursday
#5->friday
#day format -> "dchh:mm" 
#example: day1 = "1210:40" means:
# "1" = monday,
# "2" = 2 lecture hours
# "10:40" = lecture start
c.execute('''CREATE TABLE IF NOT EXISTS Section(
		sid INTEGER,
		cid VARCHAR(7),
		instructor VARCHAR(30),
		day0 VARCHAR(7),
		place0 VARCHAR(7),
		day1 VARCHAR(7),
		place1 VARCHAR(7),
		day2 VARCHAR(7),
		place2 VARCHAR(7),
		PRIMARY KEY(sid,cid),
		FOREIGN KEY(cid) REFERENCES Course(cid));''')		
DBconnection.commit()

week_days = {"Sunday":"0", "Monday":"1", "Tuesday":"2","Wednesday":"3","Thursday":"4","Friday":"5","Saturday":"6"}

def save_to_db(courses):
	for course in courses:
		coursename = course[0]
		cid = "za" + str(courses.index(course))
		sid = 0
		c.execute("INSERT INTO Course VALUES(?,?,?);",(cid,coursename,len(course[1:])))
		DBconnection.commit()
		for section in course[1:]:
			instructor_name = section[0]
			instructor_name = instructor_name.split(" ")
			instructor_name = instructor_name[::-1]
			instructor_name = " ".join(instructor_name)
			day_count = len(section[2:])/4
			days = []
			print coursename,
			print section
			for i in range(0,day_count):
				day = section[i*4+2]
				start = section[i*4+3]
				duration = str(int(section[i*4+4][:2])-int(start[:2]))
				place = section[i*4+5]
				days.append([day,start,duration,place])
			for i in range(0,3-len(days)):
				days.append([])
			if days[0]!=[]:
				day0 = week_days[days[0][0]]
				day0 += days[0][2]
				day0 += days[0][1]
				place0 = days[0][3]
			else:
				day0 = "nope"
				place0 = "-"
			if days[1]!=[]:
				day1 = week_days[days[1][0]]
				day1 += days[1][2]
				day1 += days[1][1]
				place1 = days[1][3]
			else:
				day1 = "nope"
				place1 = "-"
			if days[2]!=[]:
				day2 = week_days[days[2][0]]
				day2 += days[2][2]
				day2 += days[2][1]
				place2 = days[2][3]
			else:
				day2 = "nope"
				place2 = "-"
			c.execute("INSERT INTO Section VALUES(?,?,?,?,?,?,?,?,?);",(sid,cid,instructor_name,day0,place0,day1,place1,day2,place2))
			DBconnection.commit()
			sid += 1


def findBeginIndexes(s): 
	try:
		info = []
		#find coursename
		course_key = "Course Name:</b>"
		i = s.index(course_key) + len(course_key) - 1
		wow = ""
		while s[i] != "<":
			if s[i] == " " and s[i+1] == " ":
				break
			i += 1
			wow += s[i] 

		#find instructors, sections, hours and places
		matched = [m.start() for m in re.finditer(key,s)]
		for i in range(0, len(matched)):
			matched[i] += length
		
		for i in range(0, len(matched)):
			d = s[matched[i]]
			w = ""
			k = matched[i]
			while d != "<":
				if d != '\n':
					w += d
				k += 1
				d = s[k]

			if w != "":
				info.append(w)	

		staff_list = []
		for bok in range(0,len(info)):
			if info[bok] == "STAFF":
				staff_list.append(bok)

		section_info = []
		for i in staff_list:
			section_info.append(i-1)
		section_info.append(len(info))

		wholeInfo = []
		wholeInfo.append(wow)
		for i in range(0,len(section_info)):
			temp = []
			if section_info[i] < 0:
				continue
			if i == len(section_info) - 1:
				break
			for a in range(section_info[i], section_info[i+1]):
				#if info[a] != "STAFF":
				temp.append(info[a])

			if len(temp) == 1:
				a = wholeInfo[len(wholeInfo) - 1]
				a.append(temp[0])
				wholeInfo[len(wholeInfo) - 1] = a
			else:
				wholeInfo.append(temp)

		wholeWhole.append(wholeInfo)

	except:
	 	print "Couldn't read info"

#Select Dept. 
browser = webdriver.Firefox()
browser.get("http://oibs3.metu.edu.tr/View_Program_Course_Details_64/")
eleman = browser.find_element_by_name("select_dept")
optionCount = len(eleman.find_elements_by_tag_name("option"))

#for cont in range(0, optionCount):
for cont in range(38,39):

	old_page_source = browser.page_source
 
	eleman = browser.find_element_by_name("select_dept")
	eleman.find_elements_by_tag_name("option")[cont].click()	 
	  
	while True:
		browser.find_element_by_name("submit_CourseList").click()
		new_page_source = browser.page_source
		if new_page_source != old_page_source:
			old_page_source = new_page_source
			break

	if "Information about the department could not be found" in old_page_source:
		continue

	#Get all radioButtons
	while True:
		try: 
			radioButtons = browser.find_elements_by_css_selector("input[type='radio'][name='text_course_code']") 
			if len(radioButtons) != 0:
				break
		except:
			break

	button_count = len(radioButtons)

	#print button_count

	i = 0
	while i < button_count:
		try: 
			radioButtons = browser.find_elements_by_css_selector("input[type='radio'][name='text_course_code']") 
			radioButtons[i].click() 

			old_page_source = browser.page_source
			while True:
				browser.find_element_by_name("SubmitCourseInfo").click()
				new_page_source = browser.page_source
				if new_page_source != old_page_source:
					old_page_source = new_page_source
					break
			 
			html_source = browser.page_source 
			findBeginIndexes(html_source)

			while True:
				browser.find_element_by_name("SubmitBack").click()
				new_page_source = browser.page_source
				if new_page_source != old_page_source:
					old_page_source = new_page_source
					break 
			i += 1
		except Exception as inst:
			#print inst
			print "za"

	#write into a file(for all depts. there is one file)
	f = codecs.open("courseAllInfos_" + str(cont), "w", "utf-8")
	for j in wholeWhole:
		f.write(j[0])
		f.write("\n")
		for i in range(1, len(j)):
			for a in j[i]:
				f.write(a)
				f.write(" ")
			f.write("\n") 
		f.write("\n")
	f.close()
	if cont==38:
		print wholeWhole
	save_to_db(wholeWhole)
	wholeWhole = []

	while True:
		browser.find_element_by_name("SubmitBack").click()
		new_page_source = browser.page_source
		if new_page_source != old_page_source:
			old_page_source = new_page_source
			break 






browser.quit()

