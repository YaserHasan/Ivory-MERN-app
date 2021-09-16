export function validateEmail(email) {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!email)
        return 'The field email is required';
    if (!email.trim())
        return 'The field email is required';
    if (!email.match(emailRegex))
        return 'Invalid email';

    return;
}

export function validateFullName(name) {
    const nameRegex = /([a-zA-Z]{2,} )([a-zA-Z]{2,})/;
    if (!name)
        return 'The field name is required';
    if (!name.trim())
        return 'The field name is required';
    if (!name.match(nameRegex))
        return 'Invalid full name';

    return;
}

export function validatePassword(password) {
    if (!password)
        return 'The field password is required';
    if (!password.trim())
        return 'The field password is required';
    if (password.trim().length < 6)
        return 'Password must be at least 6 characters';
}