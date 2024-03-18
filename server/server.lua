-- Server-side functions
RegisterServerEvent("fl:notify")
AddEventHandler("fl:notify", function(title, subTitle, content, timeout, type, position)
    -- Notify all clients
    TriggerClientEvent("fl:notify", -1, title, subTitle, content, timeout, type, position)
end)

RegisterCommand("notifytestsev", function(source)
	local player = source
	TriggerClientEvent("fl:notify", player, "Type 1", "Position 0", "This is a test notify!", 5000, 1, 0)
	Wait(1)
	TriggerClientEvent("fl:notify", player, "Type 2", "Position 1", "This is a test notify!", 5000, 2, 1)
	Wait(1)
	TriggerClientEvent("fl:notify", player, "Type 3", "Position 2", "This is a test notify!", 5000, 3, 2)
	Wait(1)
	TriggerClientEvent("fl:notify", player, "Type 4", "Position 3", "This is a test notify!", 5000, 4, 3)
	Wait(5500)
	TriggerClientEvent("fl:notify", player, "Type 5", "Position 0", "This is a test notify!", 5000, 5, 0)
	Wait(1)
	TriggerClientEvent("fl:notify", player, "Type 6", "Position 1", "This is a test notify!", 5000, 6, 1)
	Wait(1)
	TriggerClientEvent("fl:notify", player, "Type 7", "Position 2", "This is a test notify!", 5000, 7, 2)
end)
