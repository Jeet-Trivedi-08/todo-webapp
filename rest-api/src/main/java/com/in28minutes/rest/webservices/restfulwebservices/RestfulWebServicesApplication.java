package com.in28minutes.rest.webservices.restfulwebservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class RestfulWebServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestfulWebServicesApplication.class, args);
	}

	//Requesting http://localhost:8090(backend/Rest API) from http://localhost:3000(frontend)
	//Cross Origin Requests are denied by default
	//Allowing all requests from http://localhost:3000
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")  //All URLs of the Spring application
				.allowedMethods("*") //Any HTTP method
				.allowedOrigins("http://localhost:3000"); //Permit requests only from localhost:3000
			}
		};
	}
}
