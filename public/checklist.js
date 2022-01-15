// ----------------------------------
/*

*/
// ----------------------------------
//the client-side part that reacts to inputs

document.addEventListener("click", (ae) => {
    if(ae.target.matches('button')) {
        let _button = ae.target;
        if (_button.id == 'addbutton') {
            //make text area
            let task = document.createElement('textarea');
            task.className = 'tasktext';
            task.rows="2";
            task.cols="35";
            task.style.fontSize="14pt";

            //make checkmark
            let checkbox = document.createElement('input')
            checkbox.type="checkbox";
            checkbox.className = 'checkbox';

            //make delete button
            let deletebutton = document.createElement('button');
            deletebutton.className = 'deletebutton';
            deletebutton.task_id = task;
            deletebutton.check_id = checkbox;
            deletebutton.style.fontSize="20pt";
            let deletetext = document.createTextNode('X')
            deletebutton.appendChild(deletetext);

            //get div and add the task stuff to it
            let taskdiv = document.getElementById('taskdiv');
            let br = document.createElement('br');
            deletebutton.br_id = br; //store br in deletebutton for later deletion too
            taskdiv.appendChild(checkbox);
            taskdiv.appendChild(task);
            taskdiv.appendChild(deletebutton);
            taskdiv.appendChild(br);
        }
        if (_button.className == 'deletebutton') {
            let taskdiv = document.getElementById('taskdiv');
            taskdiv.removeChild(_button.task_id);
            taskdiv.removeChild(_button.check_id);
            taskdiv.removeChild(_button.br_id);
            taskdiv.removeChild(_button);
        }
        /*
        if (_button.id == 'savebutton') { //unused for now
            _SaveData();
        }
        */
    }
});

/*
function _SaveData() {
    //let stored_html = new XMLSerializer().serializeToString(document);
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('get','/save')
    httpRequest.send()
}
*/