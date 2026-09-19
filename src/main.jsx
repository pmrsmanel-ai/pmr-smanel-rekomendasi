/* ============================================================================
 * PMR SMANEL — PORTAL REKOMENDASI CALON KETUA 2026/2027
 * --------------------------------------------------------------------------
 * File utama frontend.
 *
 * DAFTAR BAGIAN
 * 01. Import
 * 02. Konfigurasi API
 * 03. Data Statis: Kandidat & Kriteria
 * 04. API Helpers
 * 05. Komponen Reusable
 * 06. Portal Anggota
 * 07. Login Admin
 * 08. Portal Admin
 * 09. Root App
 * ========================================================================== */

/* ============================================================================
 * 01. IMPORT
 * ========================================================================== */

import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Search,
  Users,
  Star,
  ShieldCheck,
  Home,
  BookOpen,
  Send,

  X,
  ChevronRight,
  LockKeyhole,
  Trophy,
  BarChart3,
  RefreshCw,
  Settings,
  Medal,
  LogOut,
  Play,
  Square,
  Camera,
  Upload,
} from 'lucide-react';

import './styles.css';

/* ============================================================================
 * 02. KONFIGURASI API
 * --------------------------------------------------------------------------
 * API URL dibaca dari environment Vite:
 * VITE_REK_API_URL
 * ========================================================================== */

const API_URL = import.meta.env.VITE_REK_API_URL || '';

// Base path untuk GitHub Pages repository deployment.
const APP_BASE = import.meta.env.BASE_URL || '/';

// ============================================================================
// 03. DATA KANDIDAT & KRITERIA
// ============================================================================

const CANDIDATES = [
  {
    id: 'C001',
    name: 'MUH. DIAS CAHYA WIGUNA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C002',
    name: 'MOH. PAOZAN ATHAR',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C003',
    name: 'AZRA NAZIA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C004',
    name: 'PUTRI AYU WULANDARI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C005',
    name: 'ALFIA MASFUFA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C006',
    name: 'SITI AISYAH',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C007',
    name: 'NIDA ULFITROH',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C008',
    name: 'ELVA MAWATI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C009',
    name: 'YOFILATUL ANGGRAENI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C010',
    name: 'NABILA RAHMANI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C011',
    name: 'ZIKRIA SUDI RAHMANA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C012',
    name: 'NINI MULIANI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C013',
    name: 'ARIANTI KARMILA SARI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C014',
    name: 'AGNIA KHALYLA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C015',
    name: 'IRA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C016',
    name: 'ARIANI EVA SUSILAWATI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C017',
    name: 'GINA AYU SOFIA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C018',
    name: 'SUCIA DINDA ALYA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C019',
    name: 'NOVI HERDIAN SANI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C020',
    name: 'KAYLA SALSABILA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C021',
    name: 'M RIZKY ADITYA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C022',
    name: 'SALMA PUTRI MUTIA HANIFA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C023',
    name: "MIR'ATUSSOLIHAH PEBRIANA",
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C024',
    name: 'MUHAMMAD ASYAM AL TSYAQIB',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C025',
    name: 'YUNIAR NUR HIDAYATUZAIN',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C026',
    name: 'HAYATUN NAJWA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C027',
    name: 'L.M BAGUS WIRADINATA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C028',
    name: 'NAYLA FITRA PURNAMASARI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C029',
    name: 'NUR AULIA SYAFITRI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C030',
    name: 'DEVI SULASTRI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C031',
    name: 'DINA SOPIANA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C032',
    name: 'GHINA ALIFATUNNISA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C033',
    name: 'LIDIYA RAHMAWATI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C034',
    name: 'HELIN YULIANTI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C035',
    name: 'BENY WAHYUDHI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C036',
    name: 'AULIA UL HASRI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C037',
    name: 'DARA EL ROZAKIA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C038',
    name: 'AHMAD HAMBALI',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C039',
    name: 'ZURIATUN TOYYIBA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
  {
    id: 'C040',
    name: 'AFIFATUL GINA',
    className: 'XI',
    photoUrl: '',
    active: true,
  },
];

const CRITERIA = [
  {
    id: 'kepemimpinan',
    label: 'Kepemimpinan',
    guide: 'Mampu mengarahkan, memberi contoh, dan menggerakkan anggota untuk bekerja bersama.',
  },
  {
    id: 'tanggung_jawab',
    label: 'Tanggung jawab',
    guide: 'Mampu menyelesaikan tugas dengan sungguh-sungguh dan dapat diandalkan.',
  },
  {
    id: 'pengalaman_organisasi',
    label: 'Pengalaman organisasi',
    guide: 'Memiliki pengalaman dan keterlibatan dalam kegiatan organisasi, kepanitiaan, atau kepemimpinan.',
  },
  {
    id: 'komunikasi',
    label: 'Kemampuan komunikasi',
    guide: 'Mampu menyampaikan gagasan dengan jelas serta mendengarkan dan menghargai orang lain.',
  },
  {
    id: 'kepalangmerahan',
    label: 'Pemahaman kepalangmerahan',
    guide: 'Memahami dasar-dasar kepalangmerahan dan dapat menerapkannya dalam kegiatan PMR.',
  },
  {
    id: 'integritas',
    label: 'Integritas dan kedisiplinan',
    guide: 'Menunjukkan kejujuran, konsistensi, kedisiplinan, dan sikap yang dapat dipercaya.',
  },
  {
    id: 'pengambilan_keputusan',
    label: 'Kemampuan mengambil keputusan',
    guide: 'Mampu mempertimbangkan situasi, menentukan pilihan, dan bertindak secara bertanggung jawab.',
  },
  {
    id: 'komitmen',
    label: 'Komitmen terhadap PMR SMANEL',
    guide: 'Menunjukkan kesediaan untuk aktif, konsisten, dan berkontribusi bagi perkembangan PMR SMANEL.',
  },
];

const MAX_RECOMMENDATIONS = 5;
const RATING_MIN = 1;
const RATING_MAX = 5;
const TOP_CANDIDATES = 6;

// -----------------------------------------------------------------------------
// 03A. DAFTAR 40 KANDIDAT
// -----------------------------------------------------------------------------

const candidateNames = [
  'MUH. DIAS CAHYA WIGUNA',
  'MOH. PAOZAN ATHAR',
  'AZRA NAZIA',
  'PUTRI AYU WULANDARI',
  'ALFIA MASFUFA',
  'SITI AISYAH',
  'NIDA ULFITROH',
  'ELVA MAWATI',
  'YOFILATUL ANGGRAENI',
  'NABILA RAHMANI',
  'ZIKRIA SUDI RAHMANA',
  'NINI MULIANI',
  'ARIANTI KARMILA SARI',
  'AGNIA KHALYLA',
  'IRA',
  'ARIANI EVA SUSILAWATI',
  'GINA AYU SOFIA',
  'SUCIA DINDA ALYA',
  'NOVI HERDIAN SANI',
  'KAYLA SALSABILA',
  'M RIZKY ADITYA',
  'SALMA PUTRI MUTIA HANIFA',
  "MIR'ATUSSOLIHAH PEBRIANA",
  'MUHAMMAD ASYAM AL TSYAQIB',
  'YUNIAR NUR HIDAYATUZAIN',
  'HAYATUN NAJWA',
  'L.M BAGUS WIRADINATA',
  'NAYLA FITRA PURNAMASARI',
  'NUR AULIA SYAFITRI',
  'DEVI SULASTRI',
  'DINA SOPIANA',
  'GHINA ALIFATUNNISA',
  'LIDIYA RAHMAWATI',
  'HELIN YULIANTI',
  'BENY WAHYUDHI',
  'AULIA UL HASRI',
  'DARA EL ROZAKIA',
  'AHMAD HAMBALI',
  'ZURIATUN TOYYIBA',
  'AFIFATUL GINA',
];

// -----------------------------------------------------------------------------
// 03B. DELAPAN KRITERIA PENILAIAN
// -----------------------------------------------------------------------------

const criteria = [
  'Kepemimpinan',
  'Tanggung Jawab',
  'Pengalaman Organisasi',
  'Kemampuan Komunikasi',
  'Pemahaman Kepalangmerahan',
  'Integritas & Kedisiplinan',
  'Kemampuan Mengambil Keputusan',
  'Komitmen terhadap PMR SMANEL',
];

// -----------------------------------------------------------------------------
// 03C. DATA FALLBACK UNTUK MODE LOCAL/DEMO
// -----------------------------------------------------------------------------

const fallbackCandidates = candidateNames.map((name, index) => ({
  id: `C${String(index + 1).padStart(3, '0')}`,
  name,
  className: 'XI',
  photoUrl: '',
}));

/* ============================================================================
 * 03D. URL FOTO KANDIDAT
 * ========================================================================== */

function getDriveFileId(value) {
  const raw = String(value || '').trim();

  if (!raw) return '';

  if (/^[A-Za-z0-9_-]{20,}$/.test(raw)) {
    return raw;
  }

  const queryMatch = raw.match(/[?&]id=([A-Za-z0-9_-]+)/i);
  if (queryMatch?.[1]) return queryMatch[1];

  const pathMatch = raw.match(/\/d\/([A-Za-z0-9_-]+)/i);
  if (pathMatch?.[1]) return pathMatch[1];

  const googleContentMatch = raw.match(/googleusercontent\.com\/d\/([A-Za-z0-9_-]+)/i);
  if (googleContentMatch?.[1]) return googleContentMatch[1];

  return '';
}

function candidatePhotoSrc(value) {
  const raw = String(value || '').trim();

  if (!raw) return '';

  const fileId = getDriveFileId(raw);

  if (!fileId) return raw;

  // Endpoint yang sudah terbukti mengembalikan Content-Type image/*
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w1200`;
}

/* ============================================================================
 * 04. API HELPERS
 * ========================================================================== */

/**
 * GET request ke Google Apps Script.
 */
async function apiGet(action, extra = {}) {
  if (!API_URL) return null;

  const query = new URLSearchParams({ action, ...extra });
  const response = await fetch(`${API_URL}?${query.toString()}`);
  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.ok === false) {
    throw new Error(data.message || 'Gagal mengambil data.');
  }

  return data;
}

/**
 * POST request ke Google Apps Script.
 */
async function apiPost(payload) {
  // Mode local/demo: jangan gagal total ketika API belum diisi.
  if (!API_URL) {
    return { ok: true, demo: true };
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    // Google Apps Script Web App + browser CORS: gunakan content type sederhana
    // agar browser tidak mengirim preflight OPTIONS yang tidak ditangani doPost().
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.ok === false) {
    throw new Error(data.message || 'Gagal memproses permintaan.');
  }

  return data;
}

/* ============================================================================
 * 05. KOMPONEN REUSABLE
 * ========================================================================== */

// -----------------------------------------------------------------------------
// 05A. STAR RATING
// -----------------------------------------------------------------------------

function StarRating({ value, onChange }) {
  return (
    <div className="stars" role="radiogroup" aria-label="Penilaian bintang">
      {[1, 2, 3, 4, 5].map((number) => (
        <button
          key={number}
          type="button"
          className={number <= value ? 'star active' : 'star'}
          onClick={() => onChange(number)}
          aria-label={`${number} bintang`}
          aria-checked={number === value}
          role="radio"
        >
          ★
        </button>
      ))}
    </div>
  );
}

// -----------------------------------------------------------------------------
// 05B. KARTU KANDIDAT
// -----------------------------------------------------------------------------

function CandidateCard({ candidate, selected, onToggle, onRate }) {
  const initials = candidate.name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .slice(0, 2);

  return (
    <article className={selected ? 'candidate selected' : 'candidate'}>
      <div className="portrait">
        {candidate.photoUrl ? (
          <img
            src={candidatePhotoSrc(candidate.photoUrl)}
            alt={candidate.name}
            className="candidate-photo"
            referrerPolicy="no-referrer"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="portrait-mark">{initials}</div>
        )}

        <span className="badge">{candidate.id.replace('C', '')}</span>
      </div>

      <div className="candidate-body">
        <h3>{candidate.name}</h3>
        <div className="meta">Kelas {candidate.className}</div>

        <button
          className={selected ? 'btn btn-selected' : 'btn'}
          onClick={() => onToggle(candidate.id)}
        >
          {selected ? 'Terpilih' : 'Pilih Kandidat'}
          <ChevronRight size={16} />
        </button>

        {selected && (
          <button className="rate-link" onClick={() => onRate(candidate.id)}>
            Beri 8 Penilaian
            <ChevronRight size={15} />
          </button>
        )}
      </div>
    </article>
  );
}

// -----------------------------------------------------------------------------
// 05C. KARTU METRIK ADMIN
// -----------------------------------------------------------------------------

function MetricCard({ icon, label, value }) {
  return (
    <div className="metric-card">
      <div className="metric-icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

/* ============================================================================
 * 06. PORTAL ANGGOTA
 * ========================================================================== */

// -----------------------------------------------------------------------------
// 06A. AUTO TOKEN — STORAGE & CLIENT ID
// -----------------------------------------------------------------------------

const VOTE_CLIENT_ID_KEY =
  'pmr_smanel_vote_client_id';

const VOTE_TOKEN_KEY =
  'pmr_smanel_vote_token';

function getVoteClientId() {
  let clientId =
    localStorage.getItem(
      VOTE_CLIENT_ID_KEY
    );

  if (!clientId) {
    clientId =
      typeof crypto !== 'undefined' &&
      typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `PMR-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    localStorage.setItem(
      VOTE_CLIENT_ID_KEY,
      clientId
    );
  }

  return clientId;
}

function readStoredVoteToken() {
  try {
    const raw =
      sessionStorage.getItem(
        VOTE_TOKEN_KEY
      );

    if (!raw) {
      return {
        token: '',
        expiresAt: '',
      };
    }

    const parsed =
      JSON.parse(raw);

    if (
      !parsed?.token ||
      !parsed?.expiresAt ||
      new Date(parsed.expiresAt).getTime() <= Date.now()
    ) {
      sessionStorage.removeItem(
        VOTE_TOKEN_KEY
      );

      return {
        token: '',
        expiresAt: '',
      };
    }

    return {
      token: String(parsed.token),
      expiresAt: String(parsed.expiresAt),
    };

  } catch {
    sessionStorage.removeItem(
      VOTE_TOKEN_KEY
    );

    return {
      token: '',
      expiresAt: '',
    };
  }
}

function storeVoteToken(
  token,
  expiresAt
) {
  sessionStorage.setItem(
    VOTE_TOKEN_KEY,
    JSON.stringify({
      token,
      expiresAt,
    })
  );
}

function clearVoteToken() {
  sessionStorage.removeItem(
    VOTE_TOKEN_KEY
  );
}

const VOTE_SUBMITTED_KEY =
  'pmr_smanel_vote_submitted';

function hasSubmittedVote() {
  return (
    localStorage.getItem(
      VOTE_SUBMITTED_KEY
    ) === '1'
  );
}

function markVoteSubmitted() {
  localStorage.setItem(
    VOTE_SUBMITTED_KEY,
    '1'
  );
}

function MemberPortal() {
  const [candidates, setCandidates] = useState(fallbackCandidates);
  const [pollingStatus, setPollingStatus] = useState('DRAFT');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [activeCandidateId, setActiveCandidateId] = useState(null);
  const [scores, setScores] = useState({});
  const [token, setToken] = useState(
    () => readStoredVoteToken().token
  );
  const [tokenExpiresAt, setTokenExpiresAt] = useState(
    () => readStoredVoteToken().expiresAt
  );
  const [claimingToken, setClaimingToken] = useState(false);
  const [submitted, setSubmitted] = useState(
    () => hasSubmittedVote()
  );
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 8;

  // ---------------------------------------------------------------------------
  // 06A. LOAD DATA AWAL
  // ---------------------------------------------------------------------------

  useEffect(() => {
    (async () => {
      try {
        const candidateResponse = await apiGet('listCandidates');

        if (candidateResponse?.candidates?.length) {
          setCandidates(candidateResponse.candidates);
        }

        const settingsResponse = await apiGet('settings');

        if (settingsResponse?.status) {
          setPollingStatus(settingsResponse.status);
        }
      } catch (error) {
        setMessage(error.message);
      }
    })();
  }, []);

  // ---------------------------------------------------------------------------
  // 06B. SEARCH
  // ---------------------------------------------------------------------------

  const filteredCandidates = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return candidates;

    return candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(query),
    );
  }, [candidates, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCandidates.length / PAGE_SIZE),
  );

  const paginatedCandidates = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;

    return filteredCandidates.slice(
      startIndex,
      startIndex + PAGE_SIZE,
    );
  }, [filteredCandidates, currentPage]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(
    startIndex + PAGE_SIZE,
    filteredCandidates.length,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // ---------------------------------------------------------------------------
  // 06C. PILIH / BATALKAN KANDIDAT
  // ---------------------------------------------------------------------------

  const toggleCandidate = (candidateId) => {
    setMessage('');

    setSelectedCandidates((current) => {
      if (current.includes(candidateId)) {
        return current.filter((id) => id !== candidateId);
      }

      if (current.length >= 5) {
        setMessage('Maksimal 5 kandidat.');
        return current;
      }

      return [...current, candidateId];
    });
  };

  async function claimVoteToken() {

    if (hasSubmittedVote()) {
      throw new Error(
        'PENILAIAN_SUDAH_DIKIRIM'
      );
    }

    const now = Date.now();

    if (
      token &&
      tokenExpiresAt &&
      new Date(tokenExpiresAt).getTime() > now
    ) {
      return token;
    }

    clearVoteToken();
    setToken('');
    setTokenExpiresAt('');

    setClaimingToken(true);

    try {
      const response =
        await apiPost({
          action: 'claimAnonymousToken',
          clientId: getVoteClientId(),
        });

      if (!response?.token) {
        throw new Error(
          'TOKEN_TIDAK_TERSEDIA'
        );
      }

      const nextToken =
        String(response.token).trim();

      const nextExpiry =
        String(response.expiresAt || '');

      setToken(nextToken);
      setTokenExpiresAt(nextExpiry);

      storeVoteToken(
        nextToken,
        nextExpiry
      );

      return nextToken;

    } finally {
      setClaimingToken(false);
    }
  }

  async function openRating(candidateId) {
    setMessage('');

    if (pollingStatus !== 'OPEN') {
      setMessage(
        'Polling belum dibuka. Penilaian baru dapat dimulai saat polling dibuka.'
      );
      return;
    }

    if (
      !selectedCandidates.includes(candidateId) &&
      selectedCandidates.length >= 5
    ) {
      setMessage('Maksimal 5 kandidat.');
      return;
    }

    try {
      await claimVoteToken();

      if (!selectedCandidates.includes(candidateId)) {
        setSelectedCandidates((current) =>
          current.length < 5
            ? [...current, candidateId]
            : current,
        );
      }

      setActiveCandidateId(candidateId);

    } catch (error) {
      setMessage(
        error.message === 'TOKEN_TIDAK_TERSEDIA'
          ? 'Token penilaian sedang habis. Silakan hubungi panitia.'
          : error.message
      );
    }
  }

  // ---------------------------------------------------------------------------
  // 06D. KANDIDAT AKTIF DI MODAL
  // ---------------------------------------------------------------------------

  const activeCandidate = candidates.find(
    (candidate) => candidate.id === activeCandidateId,
  );

  // ---------------------------------------------------------------------------
  // 06E. SIMPAN SKOR
  // ---------------------------------------------------------------------------

  const setScore = (candidateId, criterionIndex, value) => {
    setScores((current) => ({
      ...current,
      [candidateId]: {
        ...(current[candidateId] || {}),
        [criterionIndex]: value,
      },
    }));
  };

  // ---------------------------------------------------------------------------
  // 06F. VALIDASI SEBELUM SUBMIT
  // ---------------------------------------------------------------------------

  const canSubmit =
    pollingStatus === 'OPEN' &&
    !submitted &&
    Boolean(token) &&
    selectedCandidates.length === 5 &&
    selectedCandidates.every((candidateId) =>
      criteria.every((_, criterionIndex) => {
        return scores[candidateId]?.[criterionIndex] >= 1;
      }),
    );

  // ---------------------------------------------------------------------------
  // 06G. SUBMIT PENILAIAN
  // ---------------------------------------------------------------------------

  async function submitRatings() {
    setMessage('');

    if (pollingStatus !== 'OPEN') {
      setMessage('Polling belum dibuka.');
      return;
    }

    if (!canSubmit) {
      setMessage('Pilih tepat 5 kandidat dan lengkapi semua 8 penilaian.');
      return;
    }

    try {
      await apiPost({
        action: 'submitRating',
        token: token.trim(),
        clientId: getVoteClientId(),
        ratings: selectedCandidates.map((candidateId) => ({
          candidateId,
          scores: Array.from(
            { length: 8 },
            (_, criterionIndex) => scores[candidateId][criterionIndex],
          ),
        })),
      });

      setSubmitted(true);
      markVoteSubmitted();
      clearVoteToken();
      setToken('');
      setTokenExpiresAt('');
      setMessage(
        'Penilaian berhasil disimpan. Token anonim telah digunakan.',
      );
    } catch (error) {

      if (
        error.message ===
        'PENILAIAN_SUDAH_DIKIRIM'
      ) {
        setSubmitted(true);
        markVoteSubmitted();
        clearVoteToken();
        setToken('');
        setTokenExpiresAt('');
        setActiveCandidateId(null);
        setMessage(
          'Penilaian kamu sudah dikirim. Token anonim ini tidak dapat digunakan lagi.'
        );
        return;
      }

      setMessage(error.message);
    }
  }

  return (
    <div className="page">
      {/* ------------------------------------------------------------------ */}
      {/* 06H. HEADER                                                       */}
      {/* ------------------------------------------------------------------ */}
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src={`${APP_BASE}logo-pmr-smanel.jpg`} alt="Logo PMR SMANEL" />
          <div>
            <strong>PMR SMANEL</strong>
            <span>PALANG MERAH REMAJA</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navigasi utama">
          <a className="nav-link active" href="#beranda">
            <Home size={15} />
            Beranda
          </a>
          <a className="nav-link" href="#kandidat">
            <Users size={15} />
            Kandidat
          </a>
          <a className="nav-link" href="#kriteria">
            <BookOpen size={15} />
            Kriteria
          </a>
          <a className="nav-link" href="#panduan">
            <BookOpen size={15} />
            Panduan
          </a>
        </nav>

        <div className="topbar-right">
          <a className="admin-link" href="?admin=1">
            <LockKeyhole size={15} />
            Admin
          </a>

          <div className="period">
            <span>Rekomendasi Calon Ketua</span>
            <strong>Periode 2026/2027</strong>
          </div>
        </div>
      </header>

      <main>
        {/* --------------------------------------------------------------- */}
        {/* 06I. HERO                                                      */}
        {/* --------------------------------------------------------------- */}
        <section className="hero" id="beranda">
          <div className="hero-copy">
            <span className="eyebrow">PORTAL REKOMENDASI</span>

            <h1>
              Calon Ketua
              <br />
              <b>PMR SMANEL</b>
            </h1>

            <p>
              Kenali kandidat, pilih <strong>tepat 5 calon</strong>, lalu
              berikan penilaian melalui 8 aspek kepemimpinan untuk masa depan
              PMR SMANEL yang lebih baik.
            </p>

            <p className="hero-quote">
              “Suara kamu, langkah nyata untuk PMR yang lebih baik.”
            </p>

            <div className="hero-actions">
              <a className="hero-btn primary" href="#kandidat">
                <Send size={15} />
                Lihat Kandidat
                <ChevronRight size={16} />
              </a>
              <a className="hero-btn secondary" href="#kriteria">
                <BookOpen size={15} />
                Panduan Penilaian
              </a>
            </div>

            <div className="stats">
              <div>
                <Users size={18} />
                <strong>{candidates.length}</strong>
                <span>Kandidat</span>
                <small>Kelas X &amp; XI</small>
              </div>
              <div>
                <Star size={18} />
                <strong>8</strong>
                <span>Kriteria Penilaian</span>
                <small>Kompetensi &amp; Karakter</small>
              </div>
              <div>
                <Trophy size={18} />
                <strong>6</strong>
                <span>Top Wawancara</span>
                <small>Hasil Penilaian</small>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <ShieldCheck size={26} />
            <strong>Penilaian anonim</strong>
            <span>Nama pemilih tidak disimpan dalam hasil penilaian.</span>
            <b className={pollingStatus === 'OPEN' ? 'live' : 'closed'}>
              {pollingStatus === 'OPEN'
                ? 'POLLING DIBUKA'
                : pollingStatus === 'CLOSED'
                  ? 'POLLING DITUTUP'
                  : 'BELUM DIBUKA'}
            </b>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* 06J. INSTRUKSI                                                  */}
        {/* --------------------------------------------------------------- */}
        <section className="instruction" id="kriteria">
          <div>
            <b>Langkah 1</b>
            <span>Pilih tepat 5 kandidat</span>
          </div>
          <div>
            <b>Langkah 2</b>
            <span>Berikan 8 penilaian bintang</span>
          </div>
          <div>
            <b>Langkah 3</b>
            <span>Kirim sekali dengan token anonim</span>
          </div>
          <div className="counter">
            <strong>{selectedCandidates.length}/5</strong>
            <span>Terpilih</span>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* 06K. PANDUAN                                                   */}
        {/* --------------------------------------------------------------- */}
        <section className="guide-section" id="panduan">
          <div className="section-heading guide-heading">
            <div>
              <span className="eyebrow">PANDUAN PENILAIAN</span>
              <h2>Kenali 8 kriteria sebelum memberi nilai</h2>
            </div>
            <p>Berikan skor berdasarkan pengamatanmu terhadap kandidat. Gunakan penilaian yang jujur, adil, dan konsisten.</p>
          </div>

          <div className="rating-guide">
            <div className="rating-guide-title">
              <Star size={17} />
              <strong>Skala penilaian 1–5</strong>
            </div>
            <div className="rating-scale">
              <span><b>1</b> Sangat rendah</span>
              <span><b>2</b> Rendah</span>
              <span><b>3</b> Cukup</span>
              <span><b>4</b> Baik</span>
              <span><b>5</b> Sangat baik</span>
            </div>
          </div>

          <div className="guide-grid">
            {CRITERIA.map((criterion, index) => (
              <article className="guide-card" key={criterion.id || index}>
                <span className="guide-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{criterion.label}</strong>
                  <p>{criterion.guide || 'Berikan nilai 1–5 berdasarkan pengamatan dan pengalamanmu terhadap kandidat.'}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="guide-reminder">
            <ShieldCheck size={18} />
            <div>
              <strong>Nilai berdasarkan pengalaman dan pengamatan</strong>
              <span>Gunakan kesempatan penilaian untuk melihat potensi kandidat secara menyeluruh, bukan hanya berdasarkan kedekatan pribadi.</span>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* 06K. SEARCH                                                     */}
        {/* --------------------------------------------------------------- */}
        <section className="controls">
          <div className="search">
            <Search size={18} />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Cari nama kandidat..."
            />
          </div>

          <div className="note">
            {filteredCandidates.length} kandidat · semuanya Kelas XI ·
            {totalPages > 1 ? ` halaman ${currentPage}/${totalPages}` : ' satu halaman'}
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* 06L. DAFTAR KANDIDAT                                            */}
        {/* --------------------------------------------------------------- */}
        <section className="grid" id="kandidat">
          {paginatedCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              selected={selectedCandidates.includes(candidate.id)}
              onToggle={toggleCandidate}
              onRate={openRating}
            />
          ))}
        </section>

        {totalPages > 1 && (
          <section className="pagination" aria-label="Navigasi kandidat">
            <button
              type="button"
              className="pagination-btn"
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
              disabled={currentPage === 1}
            >
              Sebelumnya
            </button>

            <div className="pagination-info">
              <strong>
                {startIndex + 1}-{endIndex}
              </strong>{' '}
              dari {filteredCandidates.length} kandidat
              <span>
                Halaman {currentPage} / {totalPages}
              </span>
            </div>

            <button
              type="button"
              className="pagination-btn primary"
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1),
                )
              }
              disabled={currentPage === totalPages}
            >
              Berikutnya
            </button>
          </section>
        )}
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* 06M. MODAL PENILAIAN                                              */}
      {/* ------------------------------------------------------------------ */}
      {activeCandidate && (
        <div className="overlay">
          <div className="modal">
            <button
              className="close"
              onClick={() => setActiveCandidateId(null)}
              aria-label="Tutup"
            >
              <X />
            </button>

            <div className="modal-head">
              <div className="modal-avatar">
                {activeCandidate.photoUrl ? (
                  <img
                    src={candidatePhotoSrc(activeCandidate.photoUrl)}
                    alt={activeCandidate.name}
                    className="modal-candidate-photo"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <span>{activeCandidate.name[0]}</span>
                )}
              </div>
              <div>
                <span className="eyebrow">PENILAIAN KANDIDAT</span>
                <h2>{activeCandidate.name}</h2>
                <p>
                  Kelas {activeCandidate.className} ·{' '}
                  {selectedCandidates.indexOf(activeCandidate.id) + 1}/5
                  {' kandidat'}
                </p>
              </div>
            </div>

            <div className="criteria">
              {criteria.map((criterion, index) => (
                <div className="criterion" key={criterion}>
                  <div>
                    <strong>
                      {index + 1}. {criterion}
                    </strong>
                    <span>Pilih 1–5 bintang</span>
                  </div>

                  <StarRating
                    value={scores[activeCandidate.id]?.[index] || 0}
                    onChange={(value) =>
                      setScore(activeCandidate.id, index, value)
                    }
                  />
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button
                className="btn ghost"
                onClick={() => setActiveCandidateId(null)}
              >
                Simpan
              </button>
              <button
                className="btn primary"
                onClick={() => setActiveCandidateId(null)}
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* 06N. SUBMIT FINAL                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="submit-box">
        <div>
          <span className="eyebrow">PENGIRIMAN FINAL</span>
          <h2>Sudah selesai menilai 5 kandidat?</h2>
          <p>
            Token anonim disiapkan otomatis saat kamu mulai memberi penilaian.
            Kamu tidak perlu memasukkan token secara manual.
          </p>
        </div>

        <div className="submit-side token-submit-side">
          <div className="auto-token-info">
            <strong>
              {submitted
                ? 'Penilaian sudah terkirim'
                : token
                  ? 'Token anonim siap digunakan'
                  : claimingToken
                    ? 'Menyiapkan token anonim...'
                    : 'Token akan disiapkan otomatis'}
            </strong>
            <span>
              {tokenExpiresAt && !submitted
                ? 'Token ini bersifat sementara sampai penilaian dikirim.'
                : 'Token tidak perlu diketahui atau disalin oleh peserta.'}
            </span>
          </div>

          <button
            className="btn primary"
            onClick={submitRatings}
            disabled={!canSubmit || claimingToken || submitted}
          >
            {submitted ? 'Sudah Terkirim' : 'Kirim Penilaian'}
          </button>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 06O. NOTIFIKASI                                                   */}
      {/* ------------------------------------------------------------------ */}
      {message && (
        <div className={message.includes('berhasil') ? 'toast success' : 'toast'}>
          {message}
        </div>
      )}

      <footer>PMR SMANEL · Setia, Peduli, Beraksi · 2026/2027</footer>
    </div>
  );
}

/* ============================================================================
 * 07. LOGIN ADMIN
 * ========================================================================== */

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function login() {
    setError('');
    setLoading(true);

    try {
      const response = await apiPost({
        action: 'adminLogin',
        username,
        password,
      });

      sessionStorage.setItem('pmr_admin_session', response.token);
      onLogin(response.token);
    } catch (loginError) {
      setError(loginError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-page">
      <div className="login-card">
        <div className="brand">
          <img className="brand-logo" src={`${APP_BASE}logo-pmr-smanel.jpg`} alt="Logo PMR SMANEL" />
          <div>
            <strong>PMR SMANEL</strong>
            <span>ADMIN PANEL 2026/2027</span>
          </div>
        </div>

        <h1>Login Pengurus</h1>
        <p>Kelola polling, token anonim, dan rekapitulasi Top 10.</p>

        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username admin"
        />

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          onKeyDown={(event) => event.key === 'Enter' && login()}
        />

        {error && <div className="admin-alert">{error}</div>}

        <button
          className="btn primary full"
          onClick={login}
          disabled={loading}
        >
          {loading ? 'Memeriksa...' : 'Masuk Admin'}
        </button>

        <a href={APP_BASE}>Kembali ke Portal</a>
      </div>
    </div>
  );
}

/* ============================================================================
 * 08. PORTAL ADMIN
 * ========================================================================== */

function AdminPortal() {
  const [session, setSession] = useState(
    () => sessionStorage.getItem('pmr_admin_session') || '',
  );
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState(null);
  const [actionBusy, setActionBusy] = useState(false);
  const [generated, setGenerated] = useState(null);
  const [photoSearch, setPhotoSearch] = useState('');
  const [photoBusyId, setPhotoBusyId] = useState('');
  const [photoMessage, setPhotoMessage] = useState('');
  const [photoNotice, setPhotoNotice] = useState('');
  const [participants, setParticipants] = useState(fallbackCandidates);

  // ---------------------------------------------------------------------------
  // 08A. LOAD DASHBOARD
  // ---------------------------------------------------------------------------

  async function loadDashboard() {
    if (!session) return;

    setLoading(true);
    setError('');

    try {
      const [response, candidateResponse] = await Promise.all([
        apiGet('adminSummary', { token: session }),
        apiGet('listCandidates'),
      ]);

      setData(response);

      if (candidateResponse?.candidates?.length) {
        setParticipants(candidateResponse.candidates);
      }
    } catch (loadError) {
      setError(loadError.message);

      if (loadError.message.includes('SESSION')) {
        sessionStorage.removeItem('pmr_admin_session');
        setSession('');
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (session) loadDashboard();
  }, [session]);

  if (!session) {
    return <AdminLogin onLogin={setSession} />;
  }

  const rows = data?.ranking || [];
  const summary = data?.summary || {};
  const topInterview = rows.slice(0, 10);
  const tokens = data?.tokens || {};

  // ---------------------------------------------------------------------------
  // 08B. MUTATION ADMIN
  // ---------------------------------------------------------------------------

  async function mutate(action, payload = {}) {
    setActionBusy(true);
    setError('');

    try {
      const response = await apiPost({
        action,
        token: session,
        ...payload,
      });

      if (action === 'generateTokens') {
        setGenerated(response);
      }

      await loadDashboard();
    } catch (mutationError) {
      setError(mutationError.message);
    } finally {
      setActionBusy(false);
    }
  }

  // ---------------------------------------------------------------------------
  // 08C. FOTO PESERTA
  // ---------------------------------------------------------------------------

  const photoCandidates = useMemo(() => {
    const query = photoSearch.toLowerCase().trim();

    if (!query) return participants;

    return participants.filter((candidate) =>
      candidate.name.toLowerCase().includes(query) ||
      candidate.id.toLowerCase().includes(query),
    );
  }, [participants, photoSearch]);

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('FILE_TIDAK_DAPAT_DIBACA'));
      reader.readAsDataURL(file);
    });
  }

  function showPhotoNotice(message) {
    setPhotoNotice(message);

    window.setTimeout(() => {
      setPhotoNotice((current) =>
        current === message ? '' : current,
      );
    }, 3500);
  }

  async function uploadCandidatePhoto(candidate, file, input) {
    setPhotoMessage('');

    if (!file) return;

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
    ];

    if (!allowedTypes.includes(file.type)) {
      const message = 'Format foto harus JPG, PNG, atau WebP.';
      setPhotoMessage(message);
      showPhotoNotice(message);
      if (input) input.value = '';
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      const message = 'Ukuran foto maksimal 3 MB.';
      setPhotoMessage(message);
      showPhotoNotice(message);
      if (input) input.value = '';
      return;
    }

    setPhotoBusyId(candidate.id);
    setPhotoMessage(`Foto ${candidate.name} dipilih. Sedang mengunggah...`);
    showPhotoNotice(`Mengunggah foto ${candidate.name}...`);

    const localPreviewUrl = URL.createObjectURL(file);

    setParticipants((current) =>
      current.map((item) =>
        item.id === candidate.id
          ? { ...item, photoUrl: localPreviewUrl }
          : item,
      ),
    );

    try {
      const dataUrl = await readFileAsDataUrl(file);
      const base64 = dataUrl.split(',')[1] || '';

      if (!base64) {
        throw new Error('FILE_DATA_TIDAK_VALID');
      }

      const response = await apiPost({
        action: 'uploadCandidatePhoto',
        token: session,
        candidateId: candidate.id,
        fileName: file.name,
        mimeType: file.type,
        base64,
      });

      const successMessage =
        response?.message === 'FOTO_TERSIMPAN_TETAPI_AKSES_LINK_PERLU_DIBERIKAN'
          ? `Foto ${candidate.name} tersimpan. Akses link Drive perlu diperiksa.`
          : `Foto ${candidate.name} berhasil diperbarui.`;

      setPhotoMessage(successMessage);
      showPhotoNotice(successMessage);

      await loadDashboard();
    } catch (uploadError) {
      const errorMessage =
        `Gagal mengunggah foto ${candidate.name}: ${uploadError.message}`;

      setPhotoMessage(errorMessage);
      showPhotoNotice(errorMessage);

      setParticipants((current) =>
        current.map((item) =>
          item.id === candidate.id
            ? { ...item, photoUrl: candidate.photoUrl || '' }
            : item,
        ),
      );
    } finally {
      setPhotoBusyId('');
      if (input) input.value = '';
    }
  }

  // ---------------------------------------------------------------------------
  // 08D. LOGOUT
  // ---------------------------------------------------------------------------

  async function logout() {
    try {
      await apiPost({
        action: 'adminLogout',
        token: session,
      });
    } catch {
      // Logout lokal tetap dilakukan meskipun API gagal.
    }

    sessionStorage.removeItem('pmr_admin_session');
    setSession('');
  }

  return (
    <div className="admin-page">
      {/* ------------------------------------------------------------------ */}
      {/* 08E. HEADER ADMIN                                                 */}
      {/* ------------------------------------------------------------------ */}
      <header className="admin-top">
        <div className="brand">
          <img className="brand-logo" src={`${APP_BASE}logo-pmr-smanel.jpg`} alt="Logo PMR SMANEL" />
          <div>
            <strong>PMR SMANEL</strong>
            <span>ADMIN REKOMENDASI 2026/2027</span>
          </div>
        </div>

        <div className="admin-top-actions">
          <a href={APP_BASE} className="back-link">
            Portal Anggota
          </a>

          <button className="icon-btn" onClick={logout}>
            <LogOut size={17} />
            Keluar
          </button>
        </div>
      </header>

      <main className="admin-main">
        {/* --------------------------------------------------------------- */}
        {/* 08F. JUDUL + ACTION                                             */}
        {/* --------------------------------------------------------------- */}
        <section className="admin-heading">
          <div>
            <span className="eyebrow">DASHBOARD ADMIN</span>
            <h1>Rekapitulasi Calon Ketua</h1>
            <p>
              Kontrol polling dan pantau hasil 40 kandidat berdasarkan 8
              kriteria.
            </p>
          </div>

          <div className="admin-actions">
            <a className="btn ghost" href="#data-peserta">
              <Camera size={15} />
              Data Peserta
            </a>

            <button
              className="btn ghost"
              onClick={loadDashboard}
              disabled={loading}
            >
              <RefreshCw size={15} />
              Refresh
            </button>

            <button
              className="btn primary"
              onClick={() => mutate('generateTokens', { count: 70 })}
              disabled={actionBusy}
            >
              <ShieldCheck size={15} />
              Generate 70 Token
            </button>
          </div>
        </section>

        {error && <div className="admin-alert">{error}</div>}

        {/* --------------------------------------------------------------- */}
        {/* 08G. METRICS                                                    */}
        {/* --------------------------------------------------------------- */}
        <section className="metrics">
          <MetricCard
            icon={<Users />}
            label="Kandidat"
            value={summary.totalCandidates ?? 40}
          />

          <MetricCard
            icon={<ShieldCheck />}
            label="Sudah Submit"
            value={summary.submitted ?? 0}
          />

          <MetricCard
            icon={<Star />}
            label="Rekomendasi Masuk"
            value={summary.totalRecommendations ?? 0}
          />

          <MetricCard
            icon={<Trophy />}
            label="Top Wawancara"
            value={summary.topCount ?? 10}
          />

          <MetricCard
            icon={<LockKeyhole />}
            label="Token Tersisa"
            value={tokens.remaining ?? 0}
          />
        </section>

        {/* --------------------------------------------------------------- */}
        {/* 08H. KONTROL POLLING + TOP 10                                   */}
        {/* --------------------------------------------------------------- */}
        <section className="admin-grid">
          <div className="panel">
            <div className="panel-head">
              <div>
                <h2>Kontrol Polling</h2>
                <span>
                  Status menentukan apakah anggota dapat mengirim penilaian.
                </span>
              </div>

              <Settings size={21} />
            </div>

            <div className="status-control">
              <div className="current-status">
                <span>Status saat ini</span>
                <b>{summary.status || 'DRAFT'}</b>
              </div>

              <div className="control-buttons">
                <button
                  className="btn primary"
                  onClick={() =>
                    mutate('setPollingStatus', { status: 'OPEN' })
                  }
                  disabled={actionBusy || summary.status === 'OPEN'}
                >
                  <Play size={15} />
                  Buka Polling
                </button>

                <button
                  className="btn ghost"
                  onClick={() =>
                    mutate('setPollingStatus', { status: 'CLOSED' })
                  }
                  disabled={actionBusy || summary.status === 'CLOSED'}
                >
                  <Square size={15} />
                  Tutup Polling
                </button>
              </div>
            </div>

            <div className="status-list">
              <div>
                <span>Pilihan per Anggota</span>
                <b>5 kandidat</b>
              </div>
              <div>
                <span>Kriteria per Kandidat</span>
                <b>8 bintang</b>
              </div>
              <div>
                <span>Identitas Pemilih</span>
                <b>Tidak disimpan</b>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-head">
              <div>
                <h2>Top 10 Kandidat</h2>
                <span>Urutan utama: jumlah rekomendasi</span>
              </div>

              <Medal size={21} />
            </div>

            <div className="top6-grid">
              {topInterview.map((row, index) => (
                <button
                  className="top-card"
                  key={row.id}
                  onClick={() => setDetail(row)}
                >
                  <div className="rank">{index + 1}</div>
                  <div>
                    <strong>{row.name}</strong>
                    <span>{row.recommendations} rekomendasi</span>
                    <em>⭐ {Number(row.average || 0).toFixed(2)}</em>
                  </div>
                </button>
              ))}

              {!topInterview.length && (
                <div className="empty">Belum ada penilaian masuk.</div>
              )}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* 08I. TABEL RANKING 40 KANDIDAT                                  */}
        {/* --------------------------------------------------------------- */}
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Ranking 40 Kandidat</h2>
              <span>
                Jumlah rekomendasi → rata-rata 8 kriteria sebagai tie-break.
              </span>
            </div>

            <BarChart3 size={21} />
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Kandidat</th>
                  <th>Rekomendasi</th>
                  {criteria.map((criterion) => (
                    <th key={criterion}>{criterion}</th>
                  ))}
                  <th>Rata-rata</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} onClick={() => setDetail(row)}>
                    <td>
                      <b>#{row.rank}</b>
                    </td>

                    <td>
                      <strong>{row.name}</strong>
                      <small>Kelas {row.className}</small>
                    </td>

                    <td>
                      <b>{row.recommendations}</b>
                    </td>

                    {criteria.map((_, index) => (
                      <td key={index}>
                        {Number(row.criteria?.[index] || 0).toFixed(2)}
                      </td>
                    ))}

                    <td>
                      <strong>
                        ⭐ {Number(row.average || 0).toFixed(2)}
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* 08J. DATA PESERTA                                               */}
        {/* --------------------------------------------------------------- */}
        <section className="panel photo-panel" id="data-peserta">
          <div className="panel-head">
            <div>
              <h2>Data Peserta</h2>
              <span>Kelola foto 40 calon Ketua PMR SMANEL.</span>
            </div>

            <Camera size={21} />
          </div>

          <div className="photo-toolbar">
            <div className="search photo-search">
              <Search size={16} />
              <input
                value={photoSearch}
                onChange={(event) => setPhotoSearch(event.target.value)}
                placeholder="Cari nama atau ID peserta..."
              />
            </div>

            <span className="photo-count">
              {photoCandidates.length} peserta ditampilkan
            </span>
          </div>

          {photoMessage && (
            <div className="photo-message">{photoMessage}</div>
          )}

          {photoNotice && (
            <div className="photo-toast" role="status">
              <Camera size={16} />
              <span>{photoNotice}</span>
            </div>
          )}

          <div className="photo-grid">
            {photoCandidates.map((candidate) => {
              const initials = candidate.name
                .split(' ')
                .slice(0, 2)
                .map((word) => word[0])
                .join('')
                .slice(0, 2);

              const inputId = `photo-${candidate.id}`;

              return (
                <article className="photo-card" key={candidate.id}>
                  <div className="photo-avatar">
                    {candidate.photoUrl ? (
                      <img
                        src={candidatePhotoSrc(candidate.photoUrl)}
                        alt={candidate.name}
                        referrerPolicy="no-referrer"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span>{initials}</span>
                    )}
                    <small>{candidate.id}</small>
                  </div>

                  <div className="photo-card-body">
                    <strong>{candidate.name}</strong>
                    <span>Kelas {candidate.className}</span>

                    <label
                      htmlFor={inputId}
                      className="btn ghost photo-upload-btn"
                    >
                      <Upload size={14} />
                      {photoBusyId === candidate.id
                        ? 'Mengunggah...'
                        : candidate.photoUrl
                          ? 'Ganti Foto'
                          : 'Tambah Foto'}
                    </label>

                    <input
                      id={inputId}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="photo-file-input"
                      onChange={(event) =>
                        uploadCandidatePhoto(
                          candidate,
                          event.target.files?.[0],
                          event.target,
                        )
                      }
                      disabled={photoBusyId === candidate.id}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* 08K. TOKEN BARU                                                  */}
        {/* --------------------------------------------------------------- */}
        {generated?.created > 0 && (
          <section className="panel token-panel">
            <div className="panel-head">
              <div>
                <h2>Token Baru Dibuat</h2>
                <span>
                  {generated.created} token anonim telah ditambahkan hingga target 70.
                </span>
              </div>
            </div>

            <p>Token tidak dipetakan ke nama anggota di database.</p>
          </section>
        )}
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* 08L. MODAL DETAIL KANDIDAT                                       */}
      {/* ------------------------------------------------------------------ */}
      {detail && (
        <div className="overlay">
          <div className="admin-modal">
            <button
              className="close"
              onClick={() => setDetail(null)}
              aria-label="Tutup"
            >
              <X />
            </button>

            <span className="eyebrow">DETAIL KANDIDAT</span>
            <h2>{detail.name}</h2>
            <p>
              Kelas {detail.className} · #{detail.rank} ·{' '}
              {detail.recommendations} rekomendasi
            </p>

            <div className="detail-grid">
              {criteria.map((criterion, index) => {
                const score = Number(detail.criteria?.[index] || 0);
                const percentage = Math.max(0, Math.min(100, (score / 5) * 100));

                return (
                  <div className="detail-criterion" key={criterion}>
                    <div className="detail-criterion-head">
                      <span>{criterion}</span>
                      <b>⭐ {score.toFixed(2)}</b>
                    </div>
                    <div className="score-track" aria-hidden="true">
                      <span style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="detail-total">
              ⭐ {Number(detail.average || 0).toFixed(2)}{' '}
              <small>Rata-rata 8 kriteria</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * 09. ROOT APP
 * ========================================================================== */

function App() {
  const isAdmin = new URLSearchParams(location.search).get('admin') === '1';

  return isAdmin ? <AdminPortal /> : <MemberPortal />;
}

/* ============================================================================
 * MOUNT REACT
 * ========================================================================== */

createRoot(document.getElementById('root')).render(<App />);
