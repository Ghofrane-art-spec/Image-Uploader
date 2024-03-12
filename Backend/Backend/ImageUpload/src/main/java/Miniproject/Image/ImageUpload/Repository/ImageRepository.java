package Miniproject.Image.ImageUpload.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import Miniproject.Image.ImageUpload.entity.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
	
	Optional<Image> findByName(String fileName);

}
