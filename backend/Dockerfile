# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the working directory contents into the container
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run uvicorn server
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "5000"]