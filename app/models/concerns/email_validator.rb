class EmailValidator < ActiveModel::EachValidator

    def validate_each(record, attribute, value)
        unless value =~ /^[a-zA-Z0-9][\w.-]*[@][a-zA-Z0-9][\w-]*[.][\w-]*[a-zA-Z0-9]$/
            record.errors[attribute] << (options[:message] || "It looks like that isn’t a valid email address.")
        end
    end

end