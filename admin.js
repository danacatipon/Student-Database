document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    
    const homeLink = document.getElementById('homeLink');
    const studentListLink = document.getElementById('studentListLink');
    const logoutLink = document.getElementById('logoutLink');

    const homeSection = document.getElementById('home');
    const studentListSection = document.getElementById('studentList');

    const studentTableBody = document.querySelector('#studentTable tbody');
    const addStudentBtn = document.getElementById('addStudentBtn');
    const studentModal = document.getElementById('studentModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const studentForm = document.getElementById('studentForm');

    const totalStudentsElem = document.getElementById('totalStudents');
    const totalGirlsElem = document.getElementById('totalGirls');
    const totalBoysElem = document.getElementById('totalBoys');

    let students = [
        { id: 1717917899821, name: 'Anuat, Tricia Mhay B', class: 'DIT-2', gender: 'Female', picture: 'img/tricia.jpeg' },
        { id: 1717917899822, name: 'Blanco, Jean Ivy E. ', class: 'DIT-2', gender: 'Female', picture: 'img/jean.jpg' },
        { id: 1717917899823, name: 'Catipon, Dana D.', class: 'DIT-2', gender: 'Female', picture: 'img/dana.jpg' },
        { id: 1717917899824, name: 'Marquez, Charmaine', class: 'DIT-2', gender: 'Female', picture: 'img/char.jpeg' },
        { id: 1717917899826, name: 'Molina, Tricia Marie', class: 'DIT-2', gender: 'Female', picture: 'img/triciaa.jpeg' },
        { id: 1717917899827, name: 'Paghubasan, Nicole', class: 'DIT-2', gender: 'Female', picture: 'img/nicole.jpg' }
        // Add more initial student data if needed
    ];

    function showSection(section) {
        homeSection.style.display = 'none';
        studentListSection.style.display = 'none';

        section.style.display = 'block';
    }

    homeLink.addEventListener('click', function() {
        showSection(homeSection);
        updateStats();
    });

    studentListLink.addEventListener('click', function() {
        showSection(studentListSection);
        renderStudentTable();
    });

    logoutLink.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    addStudentBtn.addEventListener('click', function() {
        openStudentModal();
    });

    closeModal.addEventListener('click', function() {
        closeStudentModal();
    });

    window.onclick = function(event) {
        if (event.target == studentModal) {
            closeStudentModal();
        }
    }

    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const studentId = document.getElementById('studentId').value;
        const studentName = document.getElementById('studentName').value;
        const studentClass = document.getElementById('studentClass').value;
        const studentGender = document.getElementById('studentGender').value;
        const studentPicture = document.getElementById('studentPicture').value;

        if (studentId) {
            // Edit existing student
            const student = students.find(s => s.id == studentId);
            student.name = studentName;
            student.class = studentClass;
            student.gender = studentGender;
            student.picture = studentPicture;
        } else {
            // Add new student
            const newStudent = {
                id: Date.now(),
                name: studentName,
                class: studentClass,
                gender: studentGender,
                picture: studentPicture
            };
            students.push(newStudent);
        }

        closeStudentModal();
        renderStudentTable();
        updateStats();
    });

    function renderStudentTable() {
        studentTableBody.innerHTML = '';
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td><img src="${student.picture}" alt="Student Picture" width="50"></td>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${student.gender}</td>
                <td>
                    <button onclick="viewStudent(${student.id})">View</button>
                    <button onclick="removeStudent(${student.id})">Remove</button>
                </td>
            `;
            studentTableBody.appendChild(row);
        });
    }

    
    window.viewStudent = function(id) {
        const student = students.find(s => s.id == id);
        if (student) {
            const studentInfo = `ID: ${student.id}\nName: ${student.name}\nClass: ${student.class}\nGender: ${student.gender}`;
            alert(studentInfo);
        }
    }

    window.removeStudent = function(id) {
        students = students.filter(s => s.id !== id);
        renderStudentTable();
        updateStats();
    }

    function openStudentModal() {
        studentForm.reset();
        document.getElementById('studentId').value = '';
        studentModal.style.display = 'block';
    }

    function closeStudentModal() {
        studentModal.style.display = 'none';
    }
    

    function updateStats() {
        const totalStudents = students.length;
        const totalGirls = students.filter(s => s.gender === 'Female').length;
        const totalBoys = students.filter(s => s.gender === 'Male').length;

        totalStudentsElem.textContent = totalStudents;
        totalGirlsElem.textContent = totalGirls;
        totalBoysElem.textContent = totalBoys;
    }

    // Show the home section by default
    showSection(homeSection);
    updateStats();
    
});
