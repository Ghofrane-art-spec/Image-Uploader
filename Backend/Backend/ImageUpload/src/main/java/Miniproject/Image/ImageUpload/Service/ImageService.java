package Miniproject.Image.ImageUpload.Service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import Miniproject.Image.ImageUpload.Repository.ImageRepository;
import Miniproject.Image.ImageUpload.Util.ImageUtility;
import Miniproject.Image.ImageUpload.entity.Image;

@Service
public class ImageService {
	
	@Autowired
	private ImageRepository repository;
	
	public ImageService(ImageRepository repo) {
		this.repository=repo;
	}

	public Image uploadImage(MultipartFile file) throws IOException {
		Image image =new Image(file.getOriginalFilename(),
				file.getContentType(),
				ImageUtility.compressImage(file.getBytes()));
	   /*Image image = repository.save(Image.builder()
	                .name(file.getOriginalFilename())
	                .type(file.getContentType())
	                .imageData(ImageUtility.compressImage(file.getBytes())).build());*/
	    if (image != null) {
	    	repository.save(image);
	        return image;
	        }
	        return null;
	    }
	
	public Optional<Image> GetImage(String fileName){
	    Optional<Image> dbImage = repository.findByName(fileName);
	    return dbImage;
	    }
	
    public byte[] downloadImage(String fileName){
	    Optional<Image> dbImage = repository.findByName(fileName);
	    byte[] images=ImageUtility.decompressImage(dbImage.get().getImageData());
	    return images;
	    }

}
