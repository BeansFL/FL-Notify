
# FL-Notify System Usage Guide

Welcome to the `FL-Notify` notification system. This guide will help you understand how to integrate and use `FL-Notify` within your server for displaying customizable notifications to players. `FL-Notify` provides a flexible way to show notifications with different styles, positions, and durations, enhancing the in-game experience.

## How to Integrate FL-Notify

### For Server Owners

To integrate `FL-Notify` into your FiveM server, you will utilize two main components: server events and client events. Here's how you can use them:

#### Server Events

- **Triggering Notifications to Players**: Use the server event `fl:notify` to send notifications to clients. This event can be called with specific parameters that determine the notification's appearance and content.

Example Usage:
```lua
TriggerClientEvent("fl:notify", targetPlayer, "Notification Title", "Subtitle", "Content message", 5000, "type", "position")
```
Replace `targetPlayer` with the player ID to whom you want to send the notification. For broadcasting to all players, use `-1` as the `targetPlayer` value.

#### Client Exports

- **Directly from Client Scripts**: You can directly use the exported function `Notify` in client-side scripts to trigger notifications without going through the server.

Example Usage:
```lua
exports['FL-Notify']:Notify("Notification Title", "Subtitle", "Content message", 5000, "type", "position")
```
Positions cannot be strings. Use 0-5 for types and 0-5 for positions

### Notification Parameters

When triggering notifications, you'll need to provide several parameters to customize the notification's appearance and behavior:

- **Title**: The main title of the notification.
- **Subtitle**: A secondary title or subtitle.
- **Content**: The main content or message of the notification.
- **Duration**: How long the notification should be displayed (in milliseconds).
- **Type**: The notification type (e.g., success, error) that may affect its appearance.
- **Position**: Where on the screen the notification will appear (e.g., top-right, bottom-left).

### Notification Themes

| Type | Theme   |
|------|---------|
| 1    | Error   |
| 2    | Success |
| 3    | Info    |
| 4    | Person  |
| 5    | Police  |
| 6    | Money   |
| 7    | Info    |
| 8    | Custom  |

### Notification Positions

| Type | Position   |
|------|------------|
| 0    | Top        |
| 1    | Bottom     |
| 2    | Left       |
| 3    | Right      |

### For Developers

If you're integrating `FL-Notify` into custom scripts or mods, you'll primarily interact with the `fl:notify` server event and the `Notify` client export as described above.


### Replacement for qbcore

````
function QBCore.Functions.Notify(text, texttype, length)
    length = length or 5000
    texttype = texttype or 'info'
    
    local convert = {
        ["primary"] = 3, 
        ["police"] = 5, 
        ["ambulance"] = 4, 
        ["error"] = 1, 
        ["success"] = 2,
        ["money"] = 6,
        ["custom"] = 8 
    }
    
    local themeId = convert[texttype] or 3

    local textposition = 0 -- follow readme to know positions

    exports['FL-Notify']:Notify("Notification", "", text, length, themeId, textposition)
end
````

## Conclusion

`FL-Notify` offers a robust solution for displaying notifications within the FiveM environment, providing server owners and developers with the tools needed to enhance player communication and engagement. By following the guidelines outlined in this document, you can seamlessly integrate `FL-Notify` into your FiveM server or custom scripts.

For further customization options or support, please refer to the official `FL-Notify` documentation or contact support.

![xs_Notify - @Cozy](https://github.com/BeansFL/FL-Notify/assets/106496863/b9f8cb20-f42d-4428-a0dd-9a8740f859e8)
