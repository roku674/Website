import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

// Use environment variables prefixed with REACT_APP_
const baseUrl = `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PROXY_PORT}`;

const Trading = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        console.log(baseUrl);
        const response = await axios.get(`${baseUrl}/api/proxy/logs`);

        console.log("Fetched logs:", response.data); // Check data structure

        const formattedLogs = response.data.map((log) => ({
          id: log._id, // MUI DataGrid will use this `id`
          logId: log.LogMessage._id, // Include LogMessage._id if needed
          timeStamp: log.LogMessage.timeStamp, // Adjust as needed
          messageSource: log.LogMessage.messageSource,
          localOperationName: log.LogMessage.localOperationName,
          messageType: log.LogMessage.messageType,
          message: log.LogMessage.message,
        }));

        setLogs(formattedLogs);
      } catch (err) {
        console.error("Error fetching logs:", err); // Log error
        setError("An error occurred while fetching logs.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []); // Keep empty if only fetching on mount

  // Define columns for the data grid
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "timeStamp", headerName: "Timestamp", width: 200 },
    { field: "messageSource", headerName: "Message Source", width: 150 },
    { field: "localOperationName", headerName: "Operation Name", width: 200 },
    { field: "messageType", headerName: "Message Type", width: 150 },
    { field: "message", headerName: "Message", width: 300 },
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
          <Box style={{ height: 600, width: "100%" }}>
            <DataGrid
              classes={{
                root: "data-grid-root",
                cell: "data-grid-cell",
                columnHeaders: "data-grid-header",
              }}
              rows={logs}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10, 20, 50]}
              checkboxSelection
              disableSelectionOnClick
              getRowId={(row) => row.id} // Use the formatted `id`
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Trading;
