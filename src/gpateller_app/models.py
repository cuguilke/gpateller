from django.db import models

from django.contrib.auth.models import User
# Create your models here.

class Course_Table(models.Model):
	class Meta:
		unique_together = (('user','table_no','row_no'),) 
	user = models.ForeignKey(User)
	row_no = models.IntegerField()
	course_name = models.CharField(max_length=18)
	course_credit = models.FloatField()
	course_letter = models.CharField(max_length=2)
	table_no = models.IntegerField() #table_no starts from 0

class User_Statistics(models.Model):
	user = models.ForeignKey(User, unique=True)
	table_count = models.IntegerField()
	table_id_to_give_next = models.IntegerField()
	language = models.IntegerField() #0 = en / 1 = tr

class User_Tables(models.Model):
	class Meta:
		unique_together = (('user','table_id'),) 
	user = models.ForeignKey(User)
	table_id = models.IntegerField()
	gpa = models.FloatField()
	cgpa = models.FloatField()
	
class Course(models.Model):
	cid = models.CharField(max_length=7, unique=True)
	course_name = models.CharField(max_length=50)
	section_count = models.IntegerField()

class Section(models.Model):
	class Meta:
		unique_together = (('sid','course'),) 
	sid = models.IntegerField()
	course = models.ForeignKey(Course)
	instructor = models.CharField(max_length=70)
	day0 = models.CharField(max_length=7)
	place0 = models.CharField(max_length=7)
	day1 = models.CharField(max_length=7)
	place1 = models.CharField(max_length=7)
	day2 = models.CharField(max_length=7)
	place2 = models.CharField(max_length=7)
	
