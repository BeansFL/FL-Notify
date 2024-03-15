export async function fetchNui(eventName, data = {}) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    };

    if(typeof GetParentResourceName === "undefined") {
        console.log(
            `Event: ${eventName},\n` +
            `Data: ${JSON.stringify(data)},\n` +
            `Error: Response unhandled`
        );
        return null;
    }

    /* eslint-disable */
    let resourceName = GetParentResourceName();

    const resp = await fetch(
        `https://${resourceName}/${eventName}`,
        options
    );

    return await resp.json();
}