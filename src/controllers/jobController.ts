import { Request, Response } from 'express';
import db from '../config/db';

export const createJob = async (req: Request, res: Response): Promise<void> => {
  const { title, company, location, salary, description } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO jobs (title, company, location, salary, description) VALUES (?, ?, ?, ?, ?)',
      [title, company, location, salary, description]
    );
    res.status(201).json({ id: (result as any).insertId, message: 'Job created' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job', details: error });
  }
};

export const getJobs = async (_req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = await db.query('SELECT * FROM jobs');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs', details: error });
  }
};


export const getJobById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const [rows] = await db.query('SELECT * FROM jobs WHERE id = ?', [id]);
      // Ensure rows is correctly typed
      const job = rows as unknown as Array<Record<string, any>>; // Cast rows to an array of job objects
      if (job.length === 0) {
        res.status(404).json({ error: 'Job not found' });
        return;
      }
      res.json(job[0]); // Access the first job
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch job', details: error });
    }
  };

export const updateJob = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, company, location, salary, description } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE jobs SET title = ?, company = ?, location = ?, salary = ?, description = ? WHERE id = ?',
      [title, company, location, salary, description, id]
    );
    if ((result as any).affectedRows === 0) {
      res.status(404).json({ error: 'Job not found' });
      return;
    }
    res.json({ message: 'Job updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update job', details: error });
  }
};

export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM jobs WHERE id = ?', [id]);
    if ((result as any).affectedRows === 0) {
      res.status(404).json({ error: 'Job not found' });
      return;
    }
    res.json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete job', details: error });
  }
};
