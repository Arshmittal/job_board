"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJobById = exports.getJobs = exports.createJob = void 0;
const db_1 = __importDefault(require("../config/db"));
const createJob = async (req, res) => {
    const { title, company, location, salary, description } = req.body;
    try {
        const [result] = await db_1.default.query('INSERT INTO jobs (title, company, location, salary, description) VALUES (?, ?, ?, ?, ?)', [title, company, location, salary, description]);
        res.status(201).json({ id: result.insertId, message: 'Job created' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create job', details: error });
    }
};
exports.createJob = createJob;
const getJobs = async (_req, res) => {
    try {
        const [rows] = await db_1.default.query('SELECT * FROM jobs');
        res.json(rows);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch jobs', details: error });
    }
};
exports.getJobs = getJobs;
const getJobById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db_1.default.query('SELECT * FROM jobs WHERE id = ?', [id]);
        // Ensure rows is correctly typed
        const job = rows; // Cast rows to an array of job objects
        if (job.length === 0) {
            res.status(404).json({ error: 'Job not found' });
            return;
        }
        res.json(job[0]); // Access the first job
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch job', details: error });
    }
};
exports.getJobById = getJobById;
const updateJob = async (req, res) => {
    const { id } = req.params;
    const { title, company, location, salary, description } = req.body;
    try {
        const [result] = await db_1.default.query('UPDATE jobs SET title = ?, company = ?, location = ?, salary = ?, description = ? WHERE id = ?', [title, company, location, salary, description, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Job not found' });
            return;
        }
        res.json({ message: 'Job updated' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update job', details: error });
    }
};
exports.updateJob = updateJob;
const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db_1.default.query('DELETE FROM jobs WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Job not found' });
            return;
        }
        res.json({ message: 'Job deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete job', details: error });
    }
};
exports.deleteJob = deleteJob;
