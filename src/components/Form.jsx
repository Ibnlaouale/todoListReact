import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import dayjs from 'dayjs';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from '@mui/base/Button';
import '../index.css';

// init localStorage
if (!localStorage.getItem('tableTasks')) { localStorage.setItem('tableTasks', JSON.stringify([])) };


if (!localStorage.getItem('countNouveau')) { localStorage.setItem('countNouveau', 0) }
if (!localStorage.getItem('countTerminer')) { localStorage.setItem('countTerminer', 0) }
if (!localStorage.getItem('countEncours')) { localStorage.setItem('countEncours', 0) }


const tableTasks = JSON.parse(localStorage.getItem('tableTasks'));
let countNouveau = JSON.parse(localStorage.getItem('countNouveau'));
let countTerminer = JSON.parse(localStorage.getItem('countTerminer'));
let countEncours = JSON.parse(localStorage.getItem('countEncours'));


function updateStatus(taskValue) {
    let status = taskValue.statut;
    switch (status) {
        case 'Nouveau':
            countNouveau++;
            localStorage.setItem('countNouveau', JSON.stringify(countNouveau));
            break;
        case 'Terminé':
            countTerminer++;
            localStorage.setItem('countTerminer', JSON.stringify(countTerminer));
            break;
        case 'En-cours':
            countEncours++;
            localStorage.setItem('countEncours', JSON.stringify(countEncours));
            break;
        default:
            break;
    }
}

export default function Form() {
    const [categorie, setCategorie] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [titre, setTitre] = React.useState('');
    const [date, setDate] = React.useState(null);
    const [description, setDescription] = React.useState('');
    // État pour le message d'alerte et la gravité
    const [alertMessage, setAlertMessage] = React.useState(null);
    const [alertSeverity, setAlertSeverity] = React.useState(null);
    const handleCloseAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };
    const handleChangeDate = (newDate) => {
        setDate(newDate);

    };
    const handleChangeCategory = (event) => {
        setCategorie(event.target.value);
    };

    const handleChangeStatus = (event) => {

        setStatus(event.target.value);
    };

    const resetValues = () => {
        setCategorie('');
        setStatus('');
        setTitre('');
        setDescription('');
    }
    const handleChangeTitle = (e) => {
        setTitre(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    // console.log(tableTasks);
    const addTask = (e) => {

        e.preventDefault();


        if (categorie === '' || status === '' || titre === '' || description === '') {

            // Afficher une alerte
            setAlertMessage("Veuillez renseigner tous les champs.");
            setAlertSeverity("error");
            setTimeout(() => {
                handleCloseAlert();
            }, 3000);

        } else {

            let task = {
                id: Date.now(),
                categorie: categorie,
                titre: titre,
                date: dayjs(date).format('DD/MM/YY'),
                statut: status,
                description: description
            }

            console.log(task);
            updateStatus(task);
            tableTasks.push(task);
            setAlertMessage("Tâche ajoutée avec succès...!!!");
            setAlertSeverity("success");
            setTimeout(() => {
                handleCloseAlert();
            }, 3000);


            localStorage.setItem('tableTasks', JSON.stringify(tableTasks));
            console.log(tableTasks);
            console.log(tableTasks);
            resetValues();

        }


    }

    return (
        <div className='divForm'>

            {alertMessage && (
                <Alert severity={alertSeverity}>
                    <AlertTitle>Ajout de tâche</AlertTitle>
                    {alertMessage}
                </Alert>
            )}
            <form onSubmit={addTask}>
                <FormControl sx={{ m: 0, minWidth: 100, marginY: 2 }} size="small">
                    <InputLabel id="demo-select-small-label">Catégorie</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={categorie}
                        label="Categorie"
                        onChange={handleChangeCategory}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Academique'}>Académique</MenuItem>
                        <MenuItem value={'ExtraAcademique'}>Extra-académique</MenuItem>
                        <MenuItem value={'Distraction'}>Distraction</MenuItem>
                    </Select>

                    <TextField sx={{ p: 0, marginY: 2, height: 0.5 }} id="outlined-basic" label="Titre" variant="outlined" onChange={handleChangeTitle} value={titre} />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{ marginBottom: 2 }} components={['DatePicker', 'DatePicker', 'DatePicker']}>
                            <DatePicker label="Date" value={date} onChange={(date) => handleChangeDate(date)} name="startDate" />
                        </DemoContainer>
                    </LocalizationProvider>

                    <TextareaAutosize className='description' placeholder='Description' onChange={handleChangeDescription} value={description} />

                    <FormControl sx={{ m: 0, minWidth: 100, marginY: 2 }} size="small">
                        <InputLabel id="demo-select-small-label">satut</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={status}
                            label="Statut"
                            onChange={handleChangeStatus}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Nouveau'}>Nouveau</MenuItem>
                            <MenuItem value={'Terminé'}>Terminé</MenuItem>
                            <MenuItem value={'En-cours'}>En-cours</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className='btnAdd' type='submit' >Ajouter</Button>
                </FormControl>
            </form>

        </div>
    );
}