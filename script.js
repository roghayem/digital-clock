
        //برای نشون دادن زمان فعلی هست 
        function updateClock() {

            // Get current date and time
            const now = new Date();

            // Get hours, minutes and seconds
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();


            // Add 0 before numbers smaller than 10
            // پد استار  یعنی باید حداقل دو تا شماره  داره  و اگه نباشه پس صفر پشتش نمیاد 
            //پد استارت فقط روی استرینگ کار میکنه  برای همین باید 
            // مقدارید رو به  استرینگ تبدیل کنیم تا بتونیم از چد استارت استفاده کنیم 
            hours = String(hours).padStart(2, "0");
            minutes = String(minutes).padStart(2, "0");
            seconds = String(seconds).padStart(2, "0");


            // Create the time
            // اینا زمان ها رو هم کنار هم میزارن 
            const currentTime = `${hours}:${minutes}:${seconds}`;


            // Display the time
            // با این کار میتونیم زمان روی  ساعت ببیاریم 
            document.getElementById("clock").textContent = currentTime;


            // Create the date
            //
            const options = {
                weekday: "long",// یعنی اشم نه شماره    
                year: "numeric",// سال رو به شماره نشون بده 
                month: "long",// این هم برای اسم هست 
                day: "numeric"// شماره هست 
            };


            // این متدی که هست این رو تبدیل میکنه این رو به فرمت تبدیل میکنه 
            //  تبدیل میکنه به استرنگ 
            const currentDate = now.toLocaleDateString(
                "en-US",
                // میگه از این زبان انگلیسی استفاده کنبیم  زمان اونجا رو میگی 
                options
                // دقیقا  با استفاده میکنیم میتونیم میتونیم دسیپلای رو کنرتال میکنیم 
            );


            // Display the date
            document.getElementById("date").textContent = currentDate;
        }


        // Run the function immediately
        updateClock();


        // Update every second
        setInterval(updateClock, 1000);
