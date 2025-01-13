import { Router } from 'express';
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from '../controllers/jobController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/jobs', asyncHandler(createJob));
router.get('/jobs', asyncHandler(getJobs));
router.get('/jobs/:id', asyncHandler(getJobById));
router.put('/jobs/:id', asyncHandler(updateJob));
router.delete('/jobs/:id', asyncHandler(deleteJob));

export default router;
