function generateMailCode() {
    const email = "misha.higham@hotmail.co.uk";
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;
    const output = "mailto:" + email + 
                   "?subject=" + subject + 
                   "&body=" + body;
    window.location.href = output;
}