class Resolvers::CreateCustomer < GraphQL::Function
  
  argument :first_name, !types.String
  argument :last_name, types.String
  argument :phone_number, !types.String
  argument :email, types.String
  argument :address, !types.String
  argument :notes, types.String
  argument :user_id, !types.ID
  argument :lat, !types.String
  argument :lng, !types.String

  type Types::CustomerType
  
  def call(_obj, args, _ctx)
    Customer.create!(
      first_name: args[:first_name],
      last_name: args[:last_name],
      phone_number: args[:phone_number],
      email: args[:email],
      address: args[:address],
      notes: args[:notes],
      user_id: args[:user_id],
      lat: args[:lat],
      lng: args[:lng],
    )
  end
end
