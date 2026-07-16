package com.cognizant.springlearn.service;

import java.util.ArrayList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;

@Service
public class CountryService {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    @SuppressWarnings("unchecked")
    public Country getCountry(String code) throws CountryNotFoundException {
        LOGGER.info("START getCountry: {}", code);
        
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        ArrayList<Country> countries = context.getBean("countryList", ArrayList.class);

        // Beginner-friendly for-loop instead of stream API
        for (Country country : countries) {
            if (country.getCode().equalsIgnoreCase(code)) {
                LOGGER.info("END getCountry - found country");
                return country;
            }
        }

        LOGGER.warn("END getCountry - country not found");
        throw new CountryNotFoundException();
    }
}
