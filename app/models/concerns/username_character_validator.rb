class UsernameCharacterValidator < ActiveModel::EachValidator

    def validate_each(record, attribute, value)
        unless value =~ /^[\w.-][\w\s.-]*[\w.-]*$/
            record.errors[attribute] << (options[:message] || "Mostly, names can’t contain punctuation. (Apostrophes, spaces, and periods are fine.)")
        end
    end

end