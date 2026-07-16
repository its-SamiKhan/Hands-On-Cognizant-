package com.cognizant.springlearn.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START authenticate");
        LOGGER.debug("Authorization Header: {}", authHeader);

        String user = getUser(authHeader);
        String token = generateJwt(user);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("END authenticate");
        return response;
    }

    private String getUser(String authHeader) {
        // Auth header format: "Basic <base64Credentials>"
        String encodedCredentials = authHeader.substring("Basic ".length()).trim();
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String credentials = new String(decodedBytes);
        
        // credentials is "username:password"
        String user = credentials.split(":")[0];
        LOGGER.debug("Decoded User: {}", user);
        return user;
    }

    private String generateJwt(String user) {
        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        builder.setIssuedAt(new Date());
        builder.setExpiration(new Date((new Date()).getTime() + 1200000)); // 20 mins
        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

        String token = builder.compact();
        LOGGER.debug("Generated JWT: {}", token);
        return token;
    }
}
