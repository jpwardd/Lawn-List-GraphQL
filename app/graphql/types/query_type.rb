Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  # queries are just represented as fields
  field :allCustomers, !types[Types::CustomerType] do
    # resolve would be called in order to fetch data for that field
    resolve -> (obj, args, ctx) { Customer.all }
  end

  field :customer, Types::CustomerType do
    description 'Retreive a customer by ID'
    argument :id, !types.ID, 'The ID of the customer to retreive'
    resolve ->(obj, args, ctx) { Customer.find(args[:id]) }
  end
end