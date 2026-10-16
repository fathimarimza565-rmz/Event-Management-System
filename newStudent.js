function displayStudentDashboard()
    {
        document.getElementById('studentDashboardSection').style.display='block'; /*WHEN ONE IS ACTIVE, HIDE THE OTHER*/	
		document.getElementById('manageNotificationSection').style.display='none';
		document.getElementById('studentProfileSection').style.display='none';	
    }

	function displayStudentNotification()
    {
		document.getElementById('manageNotificationSection').style.display='block';
        document.getElementById('studentDashboardSection').style.display='none';
        document.getElementById('studentProfileSection').style.display='none'; 	
    }

	function displayStudentProfile()
    {
		document.getElementById('studentProfileSection').style.display='block'; 
		document.getElementById('manageNotificationSection').style.display='none';
        document.getElementById('studentDashboardSection').style.display='none';	
    }

    function logout()
    {
       window.location.href = "newStudent.html"; 
    }