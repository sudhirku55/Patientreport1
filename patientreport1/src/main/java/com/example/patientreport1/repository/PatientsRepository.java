package com.example.patientreport1.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.patientreport1.models.Patients;

public interface PatientsRepository  extends MongoRepository<Patients, String> {
	public Patients findBy_id(ObjectId _id);
public List<Patients> findByName(String name);


	}

