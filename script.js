document.addEventListener("DOMContentLoaded",()=>{
    const form =document.getElementById("loginform");
    if(form){
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            const name=document.getElementById('name').value;
            localStorage.setItem('studentName', name);
            window.location.href="home.html";
        });
    }

    const welcome = document.getElementById('welcome');
    if(welcome){
    welcome.textContent = 'WELCOME, ' + localStorage.getItem('studentName');
    }
});
const subjects = [
    {name: "98th Percentile Math", link: "math.html"},
    { name: "98thPercentile Science", link: "science.html" },
      { name: "98thPercentile English", link: "english.html" },
      { name: "Games", link: "" },
      { name: "Music", link: "" },
      { name: "Art & Craft", link: "" },
      { name: "Reading Time", link: "" },
      { name: "Leisure", link: "" }
  ];
function enableEdit(){
    const table = document.getElementById('timetable')
    for
    (let r = 1; r < table.rows.length; r++){
        const row= table.rows[r];
        for (let c = 1; c < row.cells.length; c++){
          const cell= row.cells[c];
          if (cell.colSpan > 1) continue;
          const text= cell.innerText.trim();
          const select = document.createElement('select');
          subjects.forEach(sub=>{
            const opt=document.createElement('option');
            opt.value = sub.name;
            opt.textContent= sub.name;
            if (sub.name===text)opt.selected =true;
            select.appendChild(opt);
          });
          cell.innerHTML = '';
          cell.appendChild(select);
        }
    }
}
function savechanges(){
    const table = document.getElementById('timetable')
    for
    (let r = 1; r < table.rows.length; r++){
        const row= table.rows[r];
        for (let c = 1; c < row.cells.length; c++){
          const cell= row.cells[c];
          if (cell.colSpan > 1) continue;
          const select = cell.querySelector('select');
          if (select){
             const val=select.value;
             const subj= subjects.find(s=> s.name=== val);
             cell.innerHTML = subj.link
             ?'<a href="${subj.link}">${subj.name}</a>'
             :subj.name;
          }

}
    }
}
document.getElementById('feedbackForm').onsubmit = function(e) {
      e.preventDefault(); // Prevent default form submission
      // Read and trim the student's name
      const name = document.getElementById('fname').value.trim();
      // Read the selected feedback subject
      const subject = document.getElementById('fsubject').value;
      // Display a thank-you message in the output paragraph
      document.getElementById('foutput').innerText =
        `👍 Thanks, ${name}! Your feedback on ${subject} has been received.`;
      this.reset(); // Clear the form fields
    };