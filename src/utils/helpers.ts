export const validateEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export const validatePassword = (password: string): boolean => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

export const validateLoginForm = (data: {email: string, password: string}): string | null => {
    if (!validateEmail(data.email)) {
        return "Enter a valid email ID!";
    }

    if (!validatePassword(data.password)) {
        return "Enter a valid password!";
    }

    return null;
}