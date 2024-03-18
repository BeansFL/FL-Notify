function Notify(title, subTitle, content, timeout, type, position)
    SendNUIMessage({
        action = 'createNotify',
        data = {
            title = title,
            subTitle = subTitle,
            content = content,
            timeout = timeout,
            type = type,
            position = position
        }
    })
end

exports('Notify', Notify)

RegisterNetEvent("fl:notify")
AddEventHandler("fl:notify", function(title, subTitle, content, timeout, type, position)
    Notify(title, subTitle, content, timeout, type, position)
end)

RegisterCommand("notifytest", function(source, args, rawCommand)
	TriggerServerEvent("fl:notify", "Type 1", "Position 0", "This is a test notify!", 5000, 1, 0)
	Wait(1)
	TriggerServerEvent("fl:notify", "Type 2", "Position 1", "This is a test notify!", 5000, 2, 1)
	Wait(1)
	TriggerServerEvent("fl:notify", "Type 3", "Position 2", "This is a test notify!", 5000, 3, 2)
	Wait(1)
	TriggerServerEvent("fl:notify", "Type 4", "Position 3", "This is a test notify!", 5000, 4, 3)
	Wait(5500)
	TriggerServerEvent("fl:notify", "Type 5", "Position 0", "This is a test notify!", 5000, 5, 0)
	Wait(1)
	TriggerServerEvent("fl:notify", "Type 6", "Position 1", "This is a test notify!", 5000, 6, 1)
	Wait(1)
	TriggerServerEvent("fl:notify", "Type 7", "Position 2", "This is a test notify!", 5000, 7, 2)
end)

RegisterCommand("notifyall", function()
    TriggerServerEvent("fl:notify", "It works!", "This notify works!", "A client wants everyone to see this!", 5000, 1, 0)
end)

-- to show everyone use TriggerServerEvent("fl:notify", "Your Title", "Your Subtitle", "Your Content", 5000, 1, 0) or use export : exports['spark_notify']:Notify("Title", "Subtitle", "Content", 5000, 1, 0)
