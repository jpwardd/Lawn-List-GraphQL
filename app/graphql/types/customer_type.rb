Types::CustomerType = GraphQL::ObjectType.define do
  # this type is named `Link`
  name 'Customer'

  # it has the following fields
  field :id, !types.ID
  field :first_name, !types.String
  field :last_name, types.String
  field :phone_number, !types.String
  field :email, types.String
  field :address, !types.String
  field :notes, types.String
  field :user_id, !types.ID
  field :lat, !types.String
  field :lng, !types.String
end