	function displayDashboard()
    {
        document.getElementById('dashboardSection').style.display='block'; /*WHEN ONE IS ACTIVE, HIDE THE OTHER*/
		document.getElementById('navbar').style.display='flex';
		document.getElementById('footer').style.display='flex'; 	
        document.getElementById('manageEventsSection').style.display='none';
		document.getElementById('manageStudentsSection').style.display='none';
		document.getElementById('manageAdminsSection').style.display='none';
		document.getElementById('manageNotificationSection').style.display='none';
		document.getElementById('manageMediaSection').style.display='none';
		document.getElementById('mainDiv').style.display='none'; 	
		document.getElementById('paymentSection').style.display='none';
    }

    function displayEvents()
    {
        document.getElementById('manageEventsSection').style.display='block';
        document.getElementById('dashboardSection').style.display='none'; 	
		document.getElementById('manageStudentsSection').style.display='none';
		document.getElementById('manageAdminsSection').style.display='none';
		document.getElementById('manageNotificationSection').style.display='none';
		document.getElementById('manageMediaSection').style.display='none';
		document.getElementById('adminProfile').style.display='none';
		document.getElementById('paymentSection').style.display='none';
    	
    }

	function displayMedia()
    {
		document.getElementById('manageMediaSection').style.display='block';
		document.getElementById('manageNotificationSection').style.display='none';
        document.getElementById('manageEventsSection').style.display='none';
        document.getElementById('dashboardSection').style.display='none'; 	
		document.getElementById('manageStudentsSection').style.display='none';
		document.getElementById('manageAdminsSection').style.display='none';
		document.getElementById('adminProfile').style.display='none';
		document.getElementById('paymentSection').style.display='none';
    	
    }

	function displayNotification()
    {
		document.getElementById('manageNotificationSection').style.display='block';
		document.getElementById('manageMediaSection').style.display='none';
        document.getElementById('manageEventsSection').style.display='none';
        document.getElementById('dashboardSection').style.display='none'; 	
		document.getElementById('manageStudentsSection').style.display='none';
		document.getElementById('manageAdminsSection').style.display='none';
		document.getElementById('adminProfile').style.display='none';
		document.getElementById('paymentSection').style.display='none';
    	
    }

	function displayAdminProfile()
    {
		document.getElementById('adminProfile').style.display='block';
		document.getElementById('manageNotificationSection').style.display='none';
		document.getElementById('manageMediaSection').style.display='none';
        document.getElementById('manageEventsSection').style.display='none';
        document.getElementById('dashboardSection').style.display='none'; 	
		document.getElementById('manageStudentsSection').style.display='none';
		document.getElementById('manageAdminsSection').style.display='none';
		document.getElementById('paymentSection').style.display='none';
    	
    }

	function displayStudents()
    {
		document.getElementById('manageStudentsSection').style.display='block';
        document.getElementById('manageEventsSection').style.display='none';
        document.getElementById('dashboardSection').style.display='none'; 	
		document.getElementById('manageAdminsSection').style.display='none';
		document.getElementById('manageNotificationSection').style.display='none';
		document.getElementById('manageMediaSection').style.display='none';
		document.getElementById('adminProfile').style.display='none';
		document.getElementById('paymentSection').style.display='none';
    	
    }

	function displayAdmins()
    {
		document.getElementById('manageAdminsSection').style.display='block';
		document.getElementById('manageStudentsSection').style.display='none';
        document.getElementById('manageEventsSection').style.display='none';
        document.getElementById('dashboardSection').style.display='none'; 	
		document.getElementById('manageNotificationSection').style.display='none';
		document.getElementById('manageMediaSection').style.display='none';
		document.getElementById('adminProfile').style.display='none';
		document.getElementById('paymentSection').style.display='none';	
    }

	function displayPayments()
    {
		document.getElementById('paymentSection').style.display='block';
		document.getElementById('manageAdminsSection').style.display='none';
		document.getElementById('manageStudentsSection').style.display='none';
        document.getElementById('manageEventsSection').style.display='none';
        document.getElementById('dashboardSection').style.display='none'; 	
		document.getElementById('manageNotificationSection').style.display='none';
		document.getElementById('manageMediaSection').style.display='none';
		document.getElementById('adminProfile').style.display='none';	
    }

	function logoutAdmin()
    {
       window.location.href = "newAdmin.html"; 
    }
/* ------------------------------------------------PAYMENT RECORDS SCRIPT ---------------------------------------------------------- */
	function displayRecords1()
		{
			const div1 = document.getElementById('subPaymentDiv1');
  			div1.classList.toggle('show');
		}

		function displayRecords2()
		{
			const div2 = document.getElementById('subPaymentDiv2');
  			div2.classList.toggle('show');
		}

		function displayRecords3()
		{
			const div3 = document.getElementById('subPaymentDiv3');
  			div3.classList.toggle('show');
		}

		function displayRecords4()
		{
			const div4 = document.getElementById('subPaymentDiv4');
  			div4.classList.toggle('show');
		}

		function displayRecords5()
		{
			const div5 = document.getElementById('subPaymentDiv5');
  			div5.classList.toggle('show');
		}


/* ------------------------------------------- script for the 'add event' button on Admin panel------------------------------------------- */

    function openAddEventWindow()
    {
        let formAppear= document.getElementById('detailsForm');
        if(formAppear.style.display=='none')
        {
            document.getElementById('detailsForm').style.display='block';
			document.getElementById('blurWrapperAddEvent').classList.add('blur'); 
        }
        else
        {
            document.getElementById('detailsForm').style.display='none';
			document.getElementById('blurWrapperAddEvent').classList.remove('blur');
        }
        
    }
/* ------------------------------------------- script to display EVENTS on Admin panel------------------------------------------- */

	function saveData()
		{
			let eventData = { poster:document.getElementById('posterInput').files[0], /* for image files, can't use .value. 
				Instead have to use FileReader to read the  file as a Data URL*/
							  name: document.getElementById('nameInput').value,
							  date: document.getElementById('dateInput').value,
							  time: document.getElementById('timeInput').value,  
							  link: document.getElementById('linkInput').value,
							};

			let posterReader = new FileReader(); /* use FileReader API to convert the image to base64 so that it can be displayed */

			posterReader.onloadend = function()
			{
				eventData.poster = posterReader.result;
				let oldData = JSON.parse(localStorage.getItem('allDataLabel')) || []; /* retrieving the old data that was stored 
				as a string in localStorage under the key'allDataLabel'. Next, converting that string into an array using JSON.parse() */
				let eventIndex = document.getElementById('eventIndexInput').value;

		        if (eventIndex) 
		        {
		            oldData[eventIndex] = eventData; // If editing, replace the event at the given index
		        } 
		        else 
		        {
		            oldData.unshift(eventData); // If not editing, add a new event
		        }

		        localStorage.setItem('allDataLabel', JSON.stringify(oldData));
		        document.getElementById('detailsForm').reset(); //clear the form
		        
   			 };
    		 posterReader.readAsDataURL(eventData.poster);
		}

        window.addEventListener("load", function() /* make sure your script runs only after the entire page has fully loaded */
		{
			let storedAdmin = localStorage.getItem('allDataLabel'); /*retrieve the data stored in localStorage under the label 
			allDataLabel and store it in a variable */
			let convertToArrAdmin = JSON.parse(storedAdmin); /*that retrieved data is in string format. Now convert it back to an 
			ARRAY of objects */

			/* check if the parsed array is valid using if condition */
            if(convertToArrAdmin)
            {
				/* this loops through EACH object in the array */
                convertToArrAdmin.forEach (eventLoopAdmin=> 
                {
                    let createDivAdmin = document.createElement("div"); /* creates a new div for EACH event */
                    createDivAdmin.classList.add("eventCardColumn");
                    
                    let posterContainerAdmin = document.createElement('img'); 
                    posterContainerAdmin.src=eventLoopAdmin.poster;
                    posterContainerAdmin.classList.add("posterColumn");
                    createDivAdmin.appendChild(posterContainerAdmin);


                    let nameParaAdmin = document.createElement('h5'); 
                    nameParaAdmin.innerText = "Name: " + eventLoopAdmin.name; 
                    createDivAdmin.appendChild(nameParaAdmin); 


                    let dateParaAdmin = document.createElement('h5'); 
                    dateParaAdmin.innerText = "Date: " + eventLoopAdmin.date;
                    createDivAdmin.appendChild(dateParaAdmin);
                    

                    let timeParaAdmin = document.createElement('h5'); 
                    timeParaAdmin.innerText = "Time: " + eventLoopAdmin.time;
                    createDivAdmin.appendChild(timeParaAdmin);

                    let linkParaAdmin = document.createElement('h5'); 
                    linkParaAdmin.innerText = "Link: " + eventLoopAdmin.link;
                    createDivAdmin.appendChild(linkParaAdmin);
                    

                    let deleteBtnAdmin = document.createElement("a");
                    deleteBtnAdmin.innerHTML ='<img src="circle-trash-red.png" style="width:25px; height:25px;" >';
                    deleteBtnAdmin.classList.add("dltBtnColumn");

                    deleteBtnAdmin.onclick=function()
                    {
                        let eventIndexAdmin = convertToArrAdmin.indexOf(eventLoopAdmin); /* get the index of the event. The .indexOf() 
						method is used to find the position (index) of a particular element in an array */

                        convertToArrAdmin.splice(eventIndexAdmin, 1); /* remove the event from the array. mediaIndex is the index of the 
						specific event you want to remove. Next, The number of items to be removed should be mentioned. Here, you're removing
						only 1 item, so it's 1. splice() modifies the original array directly */

                        localStorage.setItem('allDataLabel', JSON.stringify(convertToArrAdmin)); /* Save the updated array back 
						to localStorage */

                        createDivAdmin.remove(); /* This will remove the specific div from the input page */
                    }
                    createDivAdmin.appendChild(deleteBtnAdmin);

                    let editBtnAdmin = document.createElement("a");
                    editBtnAdmin.innerHTML ='<img src="pen-circle -green.png" style="width:25px; height:25px;" >';
                    editBtnAdmin.classList.add("editBtnColumn");

                    editBtnAdmin.onclick=function()
                    {
                        // Prefill the form with the event data
                        let formAppear= document.getElementById('detailsForm');
                        if(formAppear.style.display=='none')
                        {
                            document.getElementById('detailsForm').style.display='block';
                        }
                        else
                        {
                            document.getElementById('detailsForm').style.display='none';
                        }
                        document.getElementById('nameInput').value = eventLoopAdmin.name;
                        document.getElementById('dateInput').value = eventLoopAdmin.date;
                        document.getElementById('timeInput').value = eventLoopAdmin.time;
                        document.getElementById('linkInput').value = eventLoopAdmin.link; 

						// store the event's index directly as a hidden form value. If this line is absent, both the old and edited events will appear
                        document.getElementById('eventIndexInput').value = convertToArrAdmin.indexOf(eventLoopAdmin); 
						/* getting the index (position) of the specific event (mediaLoopAdmin) in the convertToArrMediaAdmin array. 
						That index is then stored inside a hidden input field (mediaIndexInput) in your form. 
						Later, when you click Save, you need to know which event is being edited. */
                    }

                   createDivAdmin.appendChild(editBtnAdmin);

					let container = document.getElementById('displayAdminEvents'); //This ensures the element exists before trying to append, which prevents the null error
					if (container) 
					{
						container.appendChild(createDivAdmin);
					}

                });
            }
		});

		function closeForm()
		{
			document.getElementById('detailsForm').style.display='none';
			document.getElementById('blurWrapperAddEvent').classList.remove('blur');
		}





/* ------------------------------------------- script for the 'add media' BUTTON on admin page------------------------------------------- */

    function openAddMediaWindow()
    {
        let mediaFormAppear = document.getElementById('mediaDetailsForm');
        if(mediaFormAppear.style.display=='none')
        {
            document.getElementById('mediaDetailsForm').style.display='block';
			document.getElementById('blurWrapperAddMedia').classList.add('blur'); 
        }
        else
        {
            document.getElementById('mediaDetailsForm').style.display='none';
			document.getElementById('blurWrapperAddMedia').classList.remove('blur');
        }
        
    }


/* ------------------------------------------- script to display MEDIA on admin page------------------------------------------- */
	function mediaSaveData()
		{
			event.preventDefault(); //prevents the page from reloading
			let mediaData = { mediaPoster: document.getElementById('mediaPosterInput').files[0], /* for image files, can't use .value. 
				Instead have to use FileReader to read the  file as a Data URL*/
							  mediaName: document.getElementById('mediaNameInput').value,
							  mediaDate: document.getElementById('mediaDateInput').value,
							  mediaTime: document.getElementById('mediaTimeInput').value,
							  mediaLink: document.getElementById('mediaLinkInput').value,
							};

			let mediaPosterReader = new FileReader(); /* use FileReader API to convert the image to base64 so that it can be displayed */

			mediaPosterReader.onloadend = function()
			{
				mediaData.mediaPoster = mediaPosterReader.result;

				let mediaOldData = JSON.parse(localStorage.getItem('mediaAllDataLabel')) || []; /* retrieving the old data that was stored 
				as a string in localStorage under the key'mediaAllDataLabel'. Next, converting that string into an array using JSON.parse() */
				let mediaIndex = document.getElementById('mediaIndexInput').value;

				if (mediaIndex) 
				{
					mediaOldData[mediaIndex] = mediaData; // If editing, replace the event at the given index
				} 
				else 
				{
					mediaOldData.unshift(mediaData);  // If not editing, add a new event
				}

				localStorage.setItem('mediaAllDataLabel', JSON.stringify(mediaOldData));
				document.getElementById('mediaDetailsForm').reset(); // Clear the form
				location.reload();
			}; // Reload the page to reflect changes

    		mediaPosterReader.readAsDataURL(mediaData.mediaPoster); 
		};
				
		/* display in admin*/
		window.addEventListener("load", function() /* make sure your script runs only after the entire page has fully loaded */
		{
			let storedMediaAdmin = localStorage.getItem('mediaAllDataLabel'); /*retrieve the data stored in localStorage under the label 
			mediaAllDataLabel and store it in a variable */
			let convertToArrMediaAdmin = JSON.parse(storedMediaAdmin); /*that retrieved data is in string format. Now convert it back to an 
			ARRAY of objects */
			
			/* check if the parsed array is valid using if condition */
			if (convertToArrMediaAdmin)
			{ 
				/* this loops through EACH object in the array */
				convertToArrMediaAdmin.forEach (mediaLoopAdmin=> 
				{
					let createDivMediaAdmin = document.createElement("div"); /* creates a new div for EACH event */
					createDivMediaAdmin.classList.add("mediaEventCardColumn");
					
					let posterContainerMediaAdmin = document.createElement('img'); 
					posterContainerMediaAdmin.src = mediaLoopAdmin.mediaPoster;
					posterContainerMediaAdmin.classList.add("mediaPosterColumn");
					createDivMediaAdmin.appendChild (posterContainerMediaAdmin);

					let nameMediaAdmin = document.createElement('h5'); 
					nameMediaAdmin.innerHTML = "Event Name: " + mediaLoopAdmin.mediaName; 
					nameMediaAdmin.classList.add("mediah5");
					createDivMediaAdmin.appendChild ( nameMediaAdmin );

					let dateMediaAdmin = document.createElement('h5'); 
					dateMediaAdmin.innerHTML = "Event Date: " + mediaLoopAdmin.mediaDate; 
					dateMediaAdmin.classList.add("mediah5");
					createDivMediaAdmin.appendChild ( dateMediaAdmin );

					let TimeMediaAdmin = document.createElement('h5'); 
					TimeMediaAdmin.innerHTML = "Event Time: " + mediaLoopAdmin.mediaTime; 
					TimeMediaAdmin.classList.add("mediah5");
					createDivMediaAdmin.appendChild ( TimeMediaAdmin );

					let linkMediaAdmin = document.createElement('h5'); 
					linkMediaAdmin.innerHTML = "Event Link: " + mediaLoopAdmin.mediaLink; 
					linkMediaAdmin.classList.add("mediah5");
					createDivMediaAdmin.appendChild ( linkMediaAdmin );

					let deleteBtnMediaAdmin = document.createElement("a");
					deleteBtnMediaAdmin.innerHTML ='<img src="circle-trash-red.png" style="width:25px; height:25px;" >';
					deleteBtnMediaAdmin.classList.add("mediaDltBtnColumn");

					deleteBtnMediaAdmin.onclick=function()
					{
						let mediaIndex = convertToArrMediaAdmin.indexOf(mediaLoopAdmin); /* get the index of the event. The .indexOf() 
						method is used to find the position (index) of a particular element in an array */

						convertToArrMediaAdmin.splice(mediaIndex, 1); /* remove the event from the array. mediaIndex is the index of the 
						specific event you want to remove. Next, The number of items to be removed should be mentioned. Here, you're removing
						only 1 item, so it's 1. splice() modifies the original array directly */

						localStorage.setItem('mediaAllDataLabel', JSON.stringify(convertToArrMediaAdmin)); /* Save the updated array back 
						to localStorage */
						createDivMediaAdmin.remove(); /* This will remove the specific div from the input page */
					}

					createDivMediaAdmin.appendChild(deleteBtnMediaAdmin);

					/* --------------------------------------------------------------------------- */

					let editBtnMediaAdmin = document.createElement("a");
					editBtnMediaAdmin.innerHTML ='<img src="pen-circle -green.png" style="width:25px; height:25px;" >';
					editBtnMediaAdmin.classList.add("mediaEditBtnColumn");

					editBtnMediaAdmin.onclick=function()
					{
						// Prefill the form with the event data
						let mediaFormAppear= document.getElementById('mediaDetailsForm');

						if(mediaFormAppear.style.display=='none')
						{
							document.getElementById('mediaDetailsForm').style.display='block';
						}
						else
						{
							document.getElementById('mediaDetailsForm').style.display='none';
						}
						document.getElementById('mediaNameInput').value = mediaLoopAdmin.mediaName;
						document.getElementById('mediaPosterInput').files[0] = mediaLoopAdmin.mediaPoster; 
						document.getElementById('mediaDateInput').value = mediaLoopAdmin.mediaDate;
						document.getElementById('mediaTimeInput').value = mediaLoopAdmin.mediaTime;
						document.getElementById('mediaLinkInput').value = mediaLoopAdmin.mediaLink;

						// store the event's index directly as a hidden form value. If this line is absent, both the old and edited events will appear
						document.getElementById('mediaIndexInput').value = convertToArrMediaAdmin.indexOf(mediaLoopAdmin); 
						/* getting the index (position) of the specific event (mediaLoopAdmin) in the convertToArrMediaAdmin array. 
						That index is then stored inside a hidden input field (mediaIndexInput) in your form. 
						Later, when you click Save, you need to know which event is being edited. */
					}

					createDivMediaAdmin.appendChild(editBtnMediaAdmin);

					let container1 = document.getElementById('displayDivMedia'); //This ensures the element exists before trying to append, which prevents the null error
					if (container1) 
					{
						container1.appendChild(createDivMediaAdmin);
					}

				});
			}
		});

	function mediaCloseForm()
		{
			document.getElementById('mediaDetailsForm').style.display='none';
			document.getElementById('blurWrapperAddMedia').classList.remove('blur');
		}


