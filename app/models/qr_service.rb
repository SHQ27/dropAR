class QrService
	def self.urlToQR(url, fileId)
		fullURL = Rails.application.routes.url_helpers.root_url.delete_suffix('/') + url
		qrcode = RQRCode::QRCode.new(fullURL)

		png = qrcode.as_png(
			bit_depth: 1,
			border_modules: 0,
			color_mode: ChunkyPNG::COLOR_GRAYSCALE,
			color: 'black',
			file: nil,
			fill: 'white',
			module_px_size: 6,
			resize_exactly_to: false,
			resize_gte_to: false,
			size: 512
		)

		file_name = "#{fileId}-qrcode.png"
        root_path = "#{Rails.root.to_s}/public/uploads/"
		file_path = "#{root_path}#{file_name}"

		if not File.exists?(root_path)
          FileUtils.mkdir_p root_path
        end

#		if not File.exists?(file_path)
			IO.binwrite(file_path, png.to_s)
#		end

		return_path = '/uploads/' + file_name
		return_path
	end
end
