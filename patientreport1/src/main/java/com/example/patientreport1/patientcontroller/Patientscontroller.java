package com.example.patientreport1.patientcontroller;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.patientreport1.models.Patients;
import com.example.patientreport1.repository.PatientsRepository;

@RestController
@RequestMapping("/patients")
public class Patientscontroller {
	
	private final static String CREATE_URl="/create";

	@Autowired
	private PatientsRepository repository;

	@RequestMapping(value = "/get", method = RequestMethod.GET,produces = "application/json")
	public List<Patients> getAllPatients() {
		  return repository.findAll();
		}

		@RequestMapping(value = "/{id}", method = RequestMethod.GET,produces = "application/json")
		public Patients getPatientsById(@PathVariable("id") ObjectId id) {
		  return repository.findBy_id(id);
		}
		@RequestMapping(value = CREATE_URl, method = RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
		  public Patients createPatients(@Valid @RequestBody Patients patients) {
			
			System.out.println("project is working 888"+patients.getGroup());
		
		    repository.save(patients);
		    
		    return patients;
		  }
		@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
		public void deletePatients(@PathVariable ObjectId id) {
		  repository.delete(repository.findBy_id(id));
		}
		@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
		public void modifyPetById(@PathVariable("id") ObjectId id, @Valid @RequestBody Patients patients) {
			patients.set_id(id);
		  repository.save(patients);
		}
		

}
