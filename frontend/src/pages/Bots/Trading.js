import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const Trading = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch logs from the proxy server
    const fetchLogs = async () => {
      try {
        const response = await axios.get('/api/proxy');  // Use the proxy endpoint
        setLogs(response.data);
      } catch (err) {
        setError('An error occurred while fetching logs.');
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  // Define columns for the data grid
  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'timeStamp', headerName: 'Timestamp', width: 200 },
    { field: 'messageSource', headerName: 'Message Source', width: 150 },
    { field: 'localOperationName', headerName: 'Operation Name', width: 200 },
    { field: 'messageType', headerName: 'Message Type', width: 150 },
    { field: 'message', headerName: 'Message', width: 300 },
  ];

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Trading Logs
        </Typography>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Box style={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={logs}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10, 20, 50]}
              checkboxSelection
              disableSelectionOnClick
              getRowId={(row) => row._id}  // Ensure each row has a unique identifier
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Trading;
