# json.key_format! camelize: :lower # for other views

@users.each do |user|
    json.set! user.id do
        json.partial! "/api/users/user", user: user
    end
end