document.addEventListener('DOMContentLoaded', () => {
    console.log('Script Loaded');

    const userTableBody = document.getElementById('userTableBody');
    const addMemberBtn = document.querySelector('.addMemberBtn');
    const clearAllBtn = document.querySelector('.clearAllBtn');
    const popup = document.querySelector('.popup');
    const darkBg = document.querySelector('.dark_bg');
    const closeBtn = document.querySelector('.closeBtn');
    const addUserForm = document.getElementById('addUserForm');
    const totalUsers = document.getElementById('totalUsers');

    
    function togglePopup(show) {
        if (show) {
            darkBg.classList.add('show');
            popup.classList.add('show');
        } else {
            darkBg.classList.remove('show');
            popup.classList.remove('show');
        }
    }

    
    function loadUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        userTableBody.innerHTML = '';
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <button class="updateBtn" data-index="${index}"><i class="fa-solid fa-pen"></i></button>
                    <button class="deleteBtn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
        totalUsers.textContent = users.length;
    }

    
    function handleAddUser(e) {
        e.preventDefault();
        console.log('Add User Form Submitted'); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        if (!name || !email || !password) {
            alert('Please fill all fields.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingIndex = users.findIndex(user => user.email === email);
        if (existingIndex !== -1) {
            users[existingIndex] = { name, email, password, role };
        } else {
            users.push({ name, email, password, role });
        }

        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
        togglePopup(false);
        addUserForm.reset();
    }

   
    function handleDeleteUser(index) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
    }

    function handleUpdateUser(index) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users[index];
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('password').value = user.password;
        document.getElementById('role').value = user.role;
        togglePopup(true);
    }

    addMemberBtn.addEventListener('click', () => {
        addUserForm.reset();
        togglePopup(true);
    });

    clearAllBtn.addEventListener('click', () => {
        localStorage.removeItem('users');
        loadUsers();
    });

    closeBtn.addEventListener('click', () => {
        togglePopup(false);
    });

    addUserForm.addEventListener('submit', handleAddUser);

    userTableBody.addEventListener('click', (e) => {
        if (e.target.closest('.deleteBtn')) {
            const index = e.target.closest('.deleteBtn').dataset.index;
            handleDeleteUser(index);
        }
        if (e.target.closest('.updateBtn')) {
            const index = e.target.closest('.updateBtn').dataset.index;
            handleUpdateUser(index);
        }
    });

    loadUsers();
});