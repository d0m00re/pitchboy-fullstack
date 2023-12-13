import React, { useState, useRef } from 'react';
import { TextField, FormControl, InputLabel, FormGroup, Button, Container, Paper, Typography } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import * as entitiesCities from "./../../../network/cities/cities.entities";
import networkCities from "./../../../network/cities/cities.network";

const validateForm = async (formData : entitiesCities.ICityField) => {
  try {
    const parsedData = await entitiesCities.ZodCityField.parse(formData);
    console.log('Valid form data:', parsedData);
  } catch (error) {
    console.error('Form validation error:', error);
  }
};

interface IProjectForm {
  pushNewProject : (project : entitiesCities.ICity) => void
  onSuccess : () => void;
  onFail : () => void;
}

const makeEmptyCity = () : entitiesCities.ICityField => {
  return {
    "nom_de_la_commune": "",
    "libelle_d_acheminement": "",
    "code_postal": "",
    "coordonnees_gps": [46, 6],
    "code_commune_insee": ""
  }
}

const encodeInsideFakeData = (fields : entitiesCities.ICityField) : entitiesCities.ICityEntity => {
    let fakeData : entitiesCities.ICityEntity = {
        "datasetid": "custom",
        "geometry": { "type": "Point", "coordinates": [fields.coordonnees_gps[0], fields.coordonnees_gps[1]] },
        fields
    }
    return fakeData;
}

const FormCreateCity = (props : IProjectForm) => {
  const [formData, setFormData] = useState<entitiesCities.ICityField>(makeEmptyCity());

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    let newData = { [id]: value };

    setFormData(prevData => {
      return {
        ...prevData,
        ...newData
      };
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let futurCity = encodeInsideFakeData(formData);
   // validateForm(formDataParse);

    networkCities.createOne(futurCity)
    .then(resp => {
    //  alert(JSON.stringify(resp))
      if (resp) {
        props.pushNewProject(resp);
        props.onSuccess();
      }
      else {
        console.log("fail")
        props.onFail();
      }
    })
    .catch(err => {
      console.log(err);
      props.onFail();
    });
  };

  return (
    <Container maxWidth="sm">

      <Paper elevation={3} style={{padding : "10px"}}>
        <Typography variant="h4" style={{padding : "2px"}}>Create a city</Typography>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <FormGroup>
            <InputLabel>Nom de la commune</InputLabel>
            <TextField
              id="nom_de_la_commune"
              variant='filled'
              value={formData.nom_de_la_commune}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <InputLabel>Code commune</InputLabel>
            <TextField
              id="code_commune_insee"
              variant='filled'
              value={formData.code_commune_insee}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <InputLabel>Code postal</InputLabel>
            <TextField
              id="code_postal"
              variant='filled'
              value={formData.code_postal}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <InputLabel>Libele d acheminement</InputLabel>
            <TextField
              id="libelle_d_acheminement"
              variant='filled'
              value={formData.libelle_d_acheminement}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Creation</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default FormCreateCity;
