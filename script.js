document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .single();

    alert("Supabase odpověď: " + JSON.stringify(data) + "\nError: " + JSON.stringify(error));

    if (error || !data || data.password !== password) {
        alert('Chybné přihlašovací údaje!');
    } else {
        document.getElementById('login-form-container').style.display = 'none';
        document.getElementById('employee-dashboard').style.display = 'block';
    }
});
