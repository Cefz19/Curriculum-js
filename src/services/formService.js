export const sendFormData = async (data) => {
    const response = await fetch('https://el-endpoint.com', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Typr': 'application/json' }
    });
    return response.json();
}