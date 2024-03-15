-- Server-side functions
RegisterServerEvent("fl:notify")
AddEventHandler("fl:notify", function(title, subTitle, content, timeout, type, position)
    -- Notify all clients
    TriggerClientEvent("fl:notify", -1, title, subTitle, content, timeout, type, position)
end)

RegisterCommand("notifytestsev", function(source)
    local player = source
    TriggerClientEvent("fl:notify", player, "It works!", "This notify works!", "This is a test notify!", 5000, 1, 0)
    Wait(5000)
    TriggerClientEvent("fl:notify", player, "It works!", "This notify works!", "This is a test notify!", 5000, 2, 1)
    Wait(5000)
    TriggerClientEvent("fl:notify", player, "It works!", "This notify works!", "This is a test notify!", 5000, 3, 2)
    Wait(5000)
    TriggerClientEvent("fl:notify", player, "It works!", "This notify works!", "This is a test notify!", 5000, 4, 3)
    Wait(5000)
    TriggerClientEvent("fl:notify", player, "It works!", "This notify works!", "This is a test notify!", 5000, 5, 0)
    Wait(5000)
    TriggerClientEvent("fl:notify", player, "It works!", "This notify works!", "This is a test notify!", 5000, 6, 1)
    Wait(5000)
    TriggerClientEvent("fl:notify", player, "It works!", "This notify works!", "This is a test notify!", 5000, 7, 2)
end) 
