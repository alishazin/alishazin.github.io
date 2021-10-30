
function validateForm() {
    const nameField = document.getElementById('name-id');
    const blogField = document.getElementById('blog-id');
    
    if (nameField.value.trim().length < 3 || blogField.value.trim().length < 10) {
        alert('Fill out every fields!');
        return false;
    }
}