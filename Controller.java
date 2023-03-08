package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin

public class Controller {
	@Autowired
	BookRepo serviceRepository;
@Autowired
ApiService service;

@GetMapping("/get")
	List<TicketModel>getList(){
		return serviceRepository.findAll();
}
@PostMapping("/post")
	public TicketModel create(@RequestBody TicketModel stu) {
		return serviceRepository.save(stu);
}
@GetMapping("/getvalues/{id}")
public Optional<TicketModel>getbyid(@PathVariable int id){
	return service.getStudent(id);
}
@PutMapping("/update")
public String update(@RequestBody TicketModel stu) {
	return service.updateDetails(stu);
}
@DeleteMapping("/del")
public String delete(@RequestParam int id){
	return service.deleteDetails(id);
}

}
