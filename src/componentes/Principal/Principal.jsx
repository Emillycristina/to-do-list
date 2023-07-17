import  { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Checkbox,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { IoMdAdd } from "react-icons/io";
import {AiOutlineEdit, AiOutlineSave} from "react-icons/ai";

const Principal = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color, setColor] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };



  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditing(false); // Ao fechar o modal, também desativa o modo de edição
    setEditingIndex(-1); // Reseta o índice de edição
    setTask('');
    setColor('');
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  
  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setEditTask(taskToEdit);
    setIsEditing(true);
    setEditingIndex(index);
    setIsModalOpen(true);
  };
  
  const handleSaveTask = () => {
    const updatedTasks = tasks.map((taskItem, index) => {
      if (index === editingIndex) {
        return {
          ...taskItem,
          task: editTask,
        };
      }
      return taskItem;
    });
  
    setTasks(updatedTasks);
    setIsEditing(false);
    setEditTask('');
    setEditingIndex(-1);
    handleCloseModal();
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        task,
        color
      };
      setTasks([...tasks, newTask]);
      setTask('');
      setColor('');
      handleCloseModal();
    }
  };

  return (


    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ width: '1000px', height: '500px', p: 2, background: 'transparent' }}>
      <Button variant="contained" color="info" onClick={handleOpenModal} sx={{ width: '80px', height: '80px' }}>
          <IconButton>
            {isEditing  ? <AiOutlineSave /> : <IoMdAdd />}
          </IconButton>
        </Button>
        <Grid container spacing={2} sx={{ marginTop: '25px' }}>
          {tasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper
                sx={{
                  background: task.color,
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                 {isEditing  && editingIndex === index ? (
                  <TextField
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    fullWidth
                    autoFocus
                  />
                ) : (
                   <Typography variant="body1">{task.task}</Typography>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {isEditing && editingIndex === index ? (
                    <IconButton onClick={() => handleSaveTask(index)}>
                      <AiOutlineSave />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => handleEditTask(index)}>
                      <AiOutlineEdit />
                    </IconButton>
                  )}
               <IconButton aria-label="delete" onClick={() => deleteTask(index)}>
                <DeleteIcon fontSize="small" />
                </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
       </Paper>
       
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: color, p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Task
          </Typography>
          <TextField value={task} onChange={handleInputChange} 
          multiline
          maxRows={4}
          fullWidth />
          
         
          <FormControl variant="standard" fullWidth>
           <InputLabel id="color-label" sx={{ width: '100px', height: '10px' }}></InputLabel>
            <Select labelId="color-label" 
            value={color}
            onChange={handleColorChange}
            >
              <MenuItem value="Purple">Purple</MenuItem>
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="pink">Pink</MenuItem>
              <MenuItem value="yellow">Yellow</MenuItem>
            </Select>
          </FormControl>
          
          <Button variant="contained" color="primary" onClick={handleSaveTask} sx={{ mt: 2 }}>
          <AiOutlineSave />
         </Button>
          <Button variant="contained" color="primary" onClick={handleAddTask} sx={{ mt: 2 }}>
            Add
         </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Principal;
