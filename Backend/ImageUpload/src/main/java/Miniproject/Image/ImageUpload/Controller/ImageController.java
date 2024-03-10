package Miniproject.Image.ImageUpload.Controller;

import org.springframework.http.MediaType;
import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import Miniproject.Image.ImageUpload.Service.ImageService;
import Miniproject.Image.ImageUpload.entity.Image;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {
	
	@Autowired
	private ImageService service;

	@PostMapping("/upload")
	public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file) throws IOException {
		Image uploadImage = service.uploadImage(file);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadImage);
	}

	@GetMapping("/download/{fileName}")
	public ResponseEntity<?> downloadImage(@PathVariable String fileName){
		byte[] images=service.downloadImage(fileName);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/*"))
				.body(images);
		}
	

}
