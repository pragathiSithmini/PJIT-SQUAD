		var Fname,Sname,Add,Mail,Sub,QDetails;
		function validateFname(fname) {
			if(fname.value==""){
				alert("Firstname must be filled out");
			}
		}
		function validateSname(sname) {
			if(sname.value==""){
				alert("Surname must be filled out");
			}
		}
		function validateadr(adr) {
			if(adr.value==""){
				alert("Address must be filled out");
			}
		}
		function validatemail(mail) {
			if(mail.value==""){
				alert("Email must be filled out");
			}
		}
		function validatesub(sub) {
			if(sub.value=="Please select"){
				alert("Subject must be filled out");
			}
		}
		function validateQueryDetail(QueryDetail) {
			if(QueryDetail.value==""){
				alert("Query Detail must be filled out");
			}
		}
		
		
	
		function validateinformations(form){
			validateFname(form.fname)
			validateSname(form.sname)
			validateadr(form.adr)
			validatemail(form.mail)
			validatesub(form.sub)
			validateQueryDetail(form.QueryDetail)
			
		}
		function showInput(form) {	
			document.getElementById("display1").innerHTML ="Name:"+form.fname.value;
			document.getElementById("display2").innerHTML ="Address:"+form.adr.value;
			document.getElementById("display3").innerHTML ="Mail: "+form.mail.value;
			document.getElementById("display4").innerHTML ="Subject: "+form.sub.value;
			document.getElementById("display5").innerHTML ="Query Detail: "+form.QueryDetail.value;
			Fname=document.getElementById("fname").value;
			Sname=document.getElementById("sname").value;
			Add=document.getElementById("adr").value;
			Mail=document.getElementById("mail").value;
			Sub=document.getElementById("sub").value;
			QDetails=document.getElementById("QueryDetail").value;
			form.reset();
		}
		function validateedit(form){
			document.getElementById("display1").innerHTML ="";
			document.getElementById("display2").innerHTML ="";
			document.getElementById("display3").innerHTML ="";
			document.getElementById("display4").innerHTML ="";
			document.getElementById("display5").innerHTML ="";
			document.getElementById("fname").value=Fname;
			document.getElementById("sname").value=Sname;
			document.getElementById("adr").value=Add;
			document.getElementById("mail").value=Mail;
			document.getElementById("sub").value=Sub;
			document.getElementById("QueryDetail").value=QDetails;
			
		}
		function validatesubmit(form){
			document.getElementById("display1").innerHTML ="";
			document.getElementById("display2").innerHTML ="";
			document.getElementById("display3").innerHTML ="";
			document.getElementById("display4").innerHTML ="";
			document.getElementById("display5").innerHTML ="";
			document.getElementById("fname").value=Fname;
			document.getElementById("sname").value=Sname;
			document.getElementById("adr").value=Add;
			document.getElementById("mail").value=Mail;
			document.getElementById("sub").value=Sub;
			document.getElementById("QueryDetail").value=QDetails;
			form.submit();
		}
