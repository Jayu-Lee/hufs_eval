# Use the official OpenJDK 11 image as a base image
FROM openjdk:11-jre

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the JAR file from the local machine to the container at the working directory
COPY build/libs/*.jar app.jar

# Expose the port that the Spring Boot app will run on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
