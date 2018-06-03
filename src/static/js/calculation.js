var counter = 1;
var calculated = 0;
var limit = 60;
var format = 1; 

function addInput(divName)
{
	var lang = document.documentElement.lang;
	if(counter==limit)
	{
		if(lang == "en")
		{
			alert("Enough! You have reached the limit.");
		}
		else
		{
			alert("Daha fazla ders ekleyemedik. Olmayınca olmuyor.");
		}
	}
	else
	{		
		var newdiv = document.createElement('div');
		if(format==1)
		{
			if(lang == "en")
				newdiv.innerHTML = "Course Name: <input class='input-style' type='text' name='CourseNames"+ counter +"' id='CourseNames"+ counter +"' size=10 maxlength='30'> Credits: <input class='input-style' type='number' step='0.1' min='0' max='20' value=0 name='Credits"+ counter +"' id='Credits"+ counter +"' style='width: 40px;'> Grade: <select class='input-style' name='Grades"+ counter +"' id='Grades"+ counter +"'><option class='option-style' value='AA'>AA</option><option class='option-style' value='BA'>BA</option><option class='option-style' value='BB'>BB</option><option class='option-style' value='CB'>CB</option><option class='option-style' value='CC'>CC</option><option class='option-style' value='DC'>DC</option><option class='option-style' value='DD'>DD</option><option class='option-style' value='FD'>FD</option><option class='option-style' value='FF'>FF</option></select>";
			else
				newdiv.innerHTML = "Ders Adı: <input class='input-style' type='text' name='CourseNames"+ counter +"' id='CourseNames"+ counter +"' size=10 maxlength='30'> Kredisi: <input class='input-style' type='number' step='0.1' min='0' max='20' value=0 name='Credits"+ counter +"' id='Credits"+ counter +"' style='width: 40px;'> Harf Notu: <select class='input-style' name='Grades"+ counter +"' id='Grades"+ counter +"'><option class='option-style' value='AA'>AA</option><option class='option-style' value='BA'>BA</option><option class='option-style' value='BB'>BB</option><option class='option-style' value='CB'>CB</option><option class='option-style' value='CC'>CC</option><option class='option-style' value='DC'>DC</option><option class='option-style' value='DD'>DD</option><option class='option-style' value='FD'>FD</option><option class='option-style' value='FF'>FF</option></select>";
		}
		else if(format==2)
		{
			if(lang == "en")
				newdiv.innerHTML = "Course Name: <input class='input-style' type='text' name='CourseNames"+ counter +"' id='CourseNames"+ counter +"' size=10 maxlength='30'> Credits: <input class='input-style' type='number' step='0.1' min='0' max='20' value=0 name='Credits"+ counter +"' id='Credits"+ counter +"' style='width: 40px;'> Grade: <select class='input-style' name='Grades"+ counter +"' id='Grades"+ counter +"'><option class='option-style' value='A'>A</option><option class='option-style' value='A-'>A-</option><option class='option-style' value='B+'>B+</option><option class='option-style' value='B'>B</option><option class='option-style' value='B-'>B-</option><option class='option-style' value='C+'>C+</option><option class='option-style' value='C'>C</option><option class='option-style' value='C-'>C-</option><option class='option-style' value='D'>D</option><option class='option-style' value='F'>F</option></select>";
			else
				newdiv.innerHTML = "Ders Adı: <input class='input-style' type='text' name='CourseNames"+ counter +"' id='CourseNames"+ counter +"' size=10 maxlength='30'> Kredisi: <input class='input-style' type='number' step='0.1' min='0' max='20' value=0 name='Credits"+ counter +"' id='Credits"+ counter +"' style='width: 40px;'> Harf Notu: <select class='input-style' name='Grades"+ counter +"' id='Grades"+ counter +"'><option class='option-style' value='A'>A</option><option class='option-style' value='A-'>A-</option><option class='option-style' value='B+'>B+</option><option class='option-style' value='B'>B</option><option class='option-style' value='B-'>B-</option><option class='option-style' value='C+'>C+</option><option class='option-style' value='C'>C</option><option class='option-style' value='C-'>C-</option><option class='option-style' value='D'>D</option><option class='option-style' value='F'>F</option></select>";
		}
		else
		{
			if(lang == "en")
				newdiv.innerHTML = "Course Name: <input class='input-style' type='text' name='CourseNames"+ counter +"' id='CourseNames"+ counter +"' size=10 maxlength='30'> Credits: <input class='input-style' type='number' step='0.1' min='0' max='20' value=0 name='Credits"+ counter +"' id='Credits"+ counter +"' style='width: 40px;'> Grade: <select class='input-style' name='Grades"+ counter +"' id='Grades"+ counter +"'><option class='option-style' value='A1'>A1</option><option class='option-style' value='A2'>A2</option><option class='option-style' value='A3'>A3</option><option class='option-style' value='B1'>B1</option><option class='option-style' value='B2'>B2</option><option class='option-style' value='B3'>B3</option><option class='option-style' value='C1'>C1</option><option class='option-style' value='C2'>C2</option><option class='option-style' value='C3'>C3</option><option class='option-style' value='D'>D</option><option class='option-style' value='F1'>F1</option><option class='option-style' value='F2'>F2</option><option class='option-style' value='F3'>F3</option></select>";
			else
				newdiv.innerHTML = "Ders Adı: <input class='input-style' type='text' name='CourseNames"+ counter +"' id='CourseNames"+ counter +"' size=10 maxlength='30'> Kredisi: <input class='input-style' type='number' step='0.1' min='0' max='20' value=0 name='Credits"+ counter +"' id='Credits"+ counter +"' style='width: 40px;'> Harf Notu: <select class='input-style' name='Grades"+ counter +"' id='Grades"+ counter +"'><option class='option-style' value='A1'>A1</option><option class='option-style' value='A2'>A2</option><option class='option-style' value='A3'>A3</option><option class='option-style' value='B1'>B1</option><option class='option-style' value='B2'>B2</option><option class='option-style' value='B3'>B3</option><option class='option-style' value='C1'>C1</option><option class='option-style' value='C2'>C2</option><option class='option-style' value='C3'>C3</option><option class='option-style' value='D'>D</option><option class='option-style' value='F1'>F1</option><option class='option-style' value='F2'>F2</option><option class='option-style' value='F3'>F3</option></select>";
		}
		newdiv.setAttribute('id','div'+counter);
		document.getElementById(divName).appendChild(newdiv);	
		counter++;
		var entry_count = document.getElementById('entry_count').value;
		entry_count++;
		document.getElementById('entry_count').setAttribute('value',entry_count); 	
	}
}

function removeInput(divName)
{
	if(counter!=1)
	{
		counter--;
		var d = document.getElementById('div'+counter);
		document.getElementById(divName).removeChild(d);
		var entry_count = document.getElementById('entry_count').value;
		entry_count--;
		document.getElementById('entry_count').setAttribute('value',entry_count); 	
	}
}

function set_format(f, divName)
{
	while(counter>1)
	{
		counter--;
		var ddd = document.getElementById('div'+counter);
		document.getElementById(divName).removeChild(ddd);
	}
	if(calculated==1)
	{
		var dd = document.getElementById('gpa');
		document.getElementById(divName).removeChild(dd);
		calculated=0;
	}
	format = f;
	var d = document.getElementById(divName);
	var bye = document.getElementById('Grades0');
	var fresh = document.createElement('select');
	d.removeChild(bye);
	fresh.setAttribute('id','Grades0');
	fresh.setAttribute('name','Grades0');
	fresh.setAttribute('class','input-style');
	d.appendChild(fresh);	
	if(format==1)
	{
		var too_lazy = document.createElement('option');
		too_lazy.setAttribute('class','option-style');
		too_lazy.setAttribute('value','AA');
		too_lazy.text="AA";
		fresh.add(too_lazy, fresh.options[null]);
		var too_lazy2 = document.createElement('option');
		too_lazy2.setAttribute('class','option-style');
		too_lazy2.text="BA";
		fresh.add(too_lazy2, fresh.options[null]);
		var too_lazy3 = document.createElement('option');
		too_lazy3.setAttribute('class','option-style');
		too_lazy3.text="BB";
		fresh.add(too_lazy3, fresh.options[null]);
		var too_lazy4 = document.createElement('option');
		too_lazy4.setAttribute('class','option-style');
		too_lazy4.text="CB";
		fresh.add(too_lazy4, fresh.options[null]);
		var too_lazy5 = document.createElement('option');
		too_lazy5.setAttribute('class','option-style');
		too_lazy5.text="CC";
		fresh.add(too_lazy5, fresh.options[null]);
		var too_lazy6 = document.createElement('option');
		too_lazy6.setAttribute('class','option-style');
		too_lazy6.text="DC";
		fresh.add(too_lazy6, fresh.options[null]);
		var too_lazy7 = document.createElement('option');
		too_lazy7.setAttribute('class','option-style');
		too_lazy7.text="DD";
		fresh.add(too_lazy7, fresh.options[null]);
		var too_lazy8 = document.createElement('option');
		too_lazy8.setAttribute('class','option-style');
		too_lazy8.text="FD";
		fresh.add(too_lazy8, fresh.options[null]);
		var too_lazy9 = document.createElement('option');
		too_lazy9.setAttribute('class','option-style');
		too_lazy9.text="FF";
		fresh.add(too_lazy9, fresh.options[null]);
	}
	else if(format==2)
	{
		var booring = document.createElement('option');
		booring.setAttribute('class','option-style');
		booring.setAttribute('value','A');
		booring.text="A"; 
		fresh.add(booring, fresh.options[null]);
		var booring2 = document.createElement('option');
		booring2.setAttribute('class','option-style');
		booring2.text="A-";
		fresh.add(booring2, fresh.options[null]);
		var booring3 = document.createElement('option');
		booring3.setAttribute('class','option-style');
		booring3.text="B+";
		fresh.add(booring3, fresh.options[null]);
		var booring4 = document.createElement('option');
		booring4.setAttribute('class','option-style');
		booring4.text="B";
		fresh.add(booring4, fresh.options[null]);
		var booring5 = document.createElement('option');
		booring5.setAttribute('class','option-style');
		booring5.text="B-";
		fresh.add(booring5, fresh.options[null]);
		var booring6 = document.createElement('option');
		booring6.setAttribute('class','option-style');
		booring6.text="C+";
		fresh.add(booring6, fresh.options[null]);
		var booring7 = document.createElement('option');
		booring7.setAttribute('class','option-style');
		booring7.text="C";
		fresh.add(booring7, fresh.options[null]);
		var booring8 = document.createElement('option');
		booring8.setAttribute('class','option-style');
		booring8.text="C-";
		fresh.add(booring8, fresh.options[null]);
		var booring9 = document.createElement('option');
		booring9.setAttribute('class','option-style');
		booring9.text="D";
		fresh.add(booring9, fresh.options[null]);
		var booring10 = document.createElement('option');
		booring10.setAttribute('class','option-style');
		booring10.text="F";
		fresh.add(booring10, fresh.options[null]);
	}
	else
	{
		var help_me = document.createElement('option');
		help_me.setAttribute('class','option-style');
		help_me.setAttribute('value','A1');
		help_me.text="A1";
		fresh.add(help_me, fresh.options[null]);
		var help_me2 = document.createElement('option');
		help_me2.setAttribute('class','option-style');
		help_me2.text="A2";
		fresh.add(help_me2, fresh.options[null]);
		var help_me3 = document.createElement('option');
		help_me3.setAttribute('class','option-style');
		help_me3.text="A3";
		fresh.add(help_me3, fresh.options[null]);
		var help_me4 = document.createElement('option');
		help_me4.setAttribute('class','option-style');
		help_me4.text="B1";
		fresh.add(help_me4, fresh.options[null]);
		var help_me5 = document.createElement('option');
		help_me5.setAttribute('class','option-style');
		help_me5.text="B2";
		fresh.add(help_me5, fresh.options[null]);
		var help_me6 = document.createElement('option');
		help_me6.setAttribute('class','option-style');
		help_me6.text="B3";
		fresh.add(help_me6, fresh.options[null]);
		var help_me7 = document.createElement('option');
		help_me7.setAttribute('class','option-style');
		help_me7.text="C1";
		fresh.add(help_me7, fresh.options[null]);
		var help_me8 = document.createElement('option');
		help_me8.setAttribute('class','option-style');
		help_me8.text="C2";
		fresh.add(help_me8, fresh.options[null]);
		var help_me9 = document.createElement('option');
		help_me9.setAttribute('class','option-style');
		help_me9.text="C3";
		fresh.add(help_me9, fresh.options[null]);
		var help_me10 = document.createElement('option');
		help_me10.setAttribute('class','option-style');
		help_me10.text="D";
		fresh.add(help_me10, fresh.options[null]);
		var help_me11 = document.createElement('option');
		help_me11.setAttribute('class','option-style');
		help_me11.text="F1";
		fresh.add(help_me11, fresh.options[null]);
		var help_me12 = document.createElement('option');
		help_me12.setAttribute('class','option-style');
		help_me12.text="F2";
		fresh.add(help_me12, fresh.options[null]);
		var help_me13 = document.createElement('option');
		help_me13.setAttribute('class','option-style');
		help_me13.text="F3";
		fresh.add(help_me13, fresh.options[null]);
	}
}

function set_calc_cgpa()
{
	var lang = document.documentElement.lang;
	document.getElementById('calc_cgpa').setAttribute('value',1);
	var cgpa_domain = document.getElementById('CGPADomain');
	var button = document.getElementById('CalcCGPA');
	cgpa_domain.removeChild(button);
	if(calculated==1)
	{
		var d = document.getElementById('gpa');
		cgpa_domain.removeChild(d);
		calculated = 0;
	}
	var newdiv = document.createElement('div');
	if(lang == "en")
		newdiv.innerHTML = "Current CGPA: <input class='input-style' type='number' step='0.01' min='0' max='4' value=0 id='CurrentCGPA' name='CurrentCGPA' size=10 value='' style='width: 50px;'> Total Credits: <input class='input-style' type='number' step='0.1' min='0' max='2023' value=0 id='TotalCredits' name='TotalCredits' size=10 value='' style='width: 40px;'>"
	else
		newdiv.innerHTML = "Halihazırdaki CGPA: <input class='input-style' type='number' step='0.01' min='0' max='4' value=0 id='CurrentCGPA' name='CurrentCGPA' size=10 value='' style='width: 50px;'> Toplam Kredi: <input class='input-style' type='number' step='0.1' min='0' max='2023' value=0 id='TotalCredits' name='TotalCredits' size=10 value='' style='width: 40px;'>"
	cgpa_domain.appendChild(newdiv);
}

function calc()
{
	var i;
	var total_letter=0;
	var total_credits=0;
	var letter_grade;
	var credits;
	var result;
	var cgpa_result=0;
	var cgpa_total_credits;
	var cgpa;
	var blank_error = 0;
	var calculate_cgpa = document.getElementById('calc_cgpa').value;
	var lang = document.documentElement.lang;
	for(i=0;i<counter;i++)
	{
		letter_grade = (document.getElementById('Grades'+i).value).toUpperCase();
		credits = parseFloat(document.getElementById('Credits'+i).value);
		if(credits==0)
			blank_error = 1;
		total_credits += credits;
		if(format==1)
		{
			switch(letter_grade)
			{
				case "AA": total_letter += 4*credits; break;
				case "BA": total_letter += 3.5*credits; break;
				case "BB": total_letter += 3*credits; break;
				case "CB": total_letter += 2.5*credits; break;
				case "CC": total_letter += 2*credits; break;
				case "DC": total_letter += 1.5*credits; break;
				case "DD": total_letter += 1*credits; break;
				case "FD": total_letter += 0.5*credits; break;
				case "FF": break;			
			}
		}
		else if(format==2)
		{
			switch(letter_grade)
			{
				case "A": total_letter += 4*credits; break;
				case "A-": total_letter += 3.7*credits; break;
				case "B+": total_letter += 3.3*credits; break;
				case "B": total_letter += 3*credits; break;
				case "B-": total_letter += 2.7*credits; break;
				case "C+": total_letter += 2.3*credits; break;
				case "C": total_letter += 2*credits; break;
				case "C-": total_letter += 1.7*credits; break;
				case "D+": total_letter += 1.3*credits; break;	
				case "D": total_letter += 1*credits; break;
				case "F": break;
			}
		}
		else if(format==3)
		{
			switch(letter_grade)
			{
				case "A1": total_letter += 4*credits; break;
				case "A2": total_letter += 3.75*credits; break;
				case "A3": total_letter += 3.5*credits; break;
				case "B1": total_letter += 3.25*credits; break;
				case "B2": total_letter += 3*credits; break;
				case "B3": total_letter += 2.75*credits; break;
				case "C1": total_letter += 2.5*credits; break;
				case "C2": total_letter += 2.25*credits; break;
				case "C3": total_letter += 2*credits; break;
				case "D": total_letter += 1.75*credits; break;
				case "F3": break;
				case "F2": break;
				case "F1": break;	
			}
		}
		if(blank_error==1)
		{
			if(lang == "en")
			{
				alert("One does not simply calculate GPA with a course that has 0 credits.");
			}	
			else
			{
				alert("Bugün dünyanın hiç 1 yerinde 0 kredili ders, not ortalaması hesabına konmaz.");
			}
			break;
		}
	}
	if(blank_error==0)
	{
		result = total_letter/total_credits;
		result = Number(result).toFixed(2);
		if(calculated==0)
		{
			var newdiv = document.createElement('div');
			newdiv.innerHTML = "<br>GPA: " + result;
			newdiv.setAttribute('id','gpa');	
			calculated = 1;
		}
		else
		{
			var newdiv = document.createElement('div');
			newdiv.innerHTML = "<br>GPA: " + result;
			newdiv.setAttribute('id','gpa');
			var d = document.getElementById('gpa');
			document.getElementById("CGPADomain").removeChild(d);
			 	
		}
		if(calculate_cgpa==1)
		{
			cgpa = Number(document.getElementById('CurrentCGPA').value);
			cgpa_total_credits = Number(document.getElementById('TotalCredits').value);
			cgpa_result = result*total_credits + cgpa*cgpa_total_credits;
			cgpa_total_credits += total_credits;
			cgpa_result = cgpa_result/cgpa_total_credits;
			cgpa_result = Number(cgpa_result).toFixed(2);
			newdiv.innerHTML += "	CGPA: " + cgpa_result;
		}
		document.getElementById("CGPADomain").appendChild(newdiv);
		document.getElementById('gpa_').setAttribute('value',result);
		document.getElementById('cgpa_').setAttribute('value',cgpa_result);
	}
	else
		blank_error=0;
}

function edit(tableId)
{
	var table = document.getElementById(tableId);
	var i,course,credit,grade;
	var row_count = table.rows.length;
	while(counter>1) //clear existing dynamic inputs except the first one
	{
		counter--;
		var ddd = document.getElementById('div'+counter);
		document.getElementById('dynamicInput').removeChild(ddd);
	}
	for(i=1;i<row_count-1;i++) //first and last rows are irrelevant
	{
		course = table.rows[i].cells[0].innerHTML;
		credit = table.rows[i].cells[1].innerHTML;
		grade = table.rows[i].cells[2].innerHTML;
		if(i==1) 
		{
			document.getElementById('CourseNames0').setAttribute('value',course);
			document.getElementById('Credits0').setAttribute('value',credit);
			document.getElementById('Grades0').value = grade;  
		}
		else //create new dynamic inputs
		{
			addInput('dynamicInput');
			document.getElementById('CourseNames' + (i-1)).setAttribute('value',course);
			document.getElementById('Credits' + (i-1)).setAttribute('value',credit);
			document.getElementById('Grades' + (i-1)).value = grade;
		}
	}
}

