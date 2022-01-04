class ContactForm < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A[^@\s]+@[^@\s]+\z/i
  attribute :message

  def headers
    {
      subject: "DropAr Web",
      to: "dropar.ar@gmail.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
