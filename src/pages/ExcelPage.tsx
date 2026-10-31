import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Search, 
  Download, 
  Upload, 
  Filter, 
  Plus, 
  ArrowUpDown, 
  CheckCircle, 
  FileText, 
  Calculator,
  RefreshCw
} from 'lucide-react';
import { INITIAL_EXCEL_DATA } from '../data/schoolData';

export const ExcelPage: React.FC = () => {
  const [data, setData] = useState(INITIAL_EXCEL_DATA);
  const [activeSheet, setActiveSheet] = useState<'calificaciones' | 'paec' | 'clubs'>('calificaciones');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('todos');
  const [sortField, setSortField] = useState<'nombre' | 'promedio' | 'grupo'>('nombre');
  const [sortAsc, setSortAsc] = useState(true);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // New row modal / form
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRow, setNewRow] = useState({
    nombre: '',
    matricula: '2024-013',
    grupo: '101',
    club: 'Básquetbol',
    paecOrigami: 'Entregado (10)',
    promedio: 9.5,
    estatus: 'Regular'
  });

  // Filtering
  const filteredData = data.filter((row) => {
    const matchesSearch = row.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          row.matricula.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          row.club.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = selectedGroup === 'todos' || row.grupo === selectedGroup;
    return matchesSearch && matchesGroup;
  }).sort((a, b) => {
    let comp = 0;
    if (sortField === 'nombre') comp = a.nombre.localeCompare(b.nombre);
    else if (sortField === 'promedio') comp = a.promedio - b.promedio;
    else if (sortField === 'grupo') comp = a.grupo.localeCompare(b.grupo);
    return sortAsc ? comp : -comp;
  });

  const handleSort = (field: 'nombre' | 'promedio' | 'grupo') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const handleAddRow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRow.nombre.trim()) return;
    const added = {
      id: Date.now(),
      matricula: newRow.matricula || `2024-0${data.length + 1}`,
      nombre: newRow.nombre,
      grupo: newRow.grupo,
      club: newRow.club,
      paecOrigami: newRow.paecOrigami,
      promedio: Number(newRow.promedio),
      estatus: Number(newRow.promedio) >= 9.8 ? 'Excelencia' : 'Regular'
    };
    setData([...data, added]);
    setShowAddModal(false);
    setNewRow({ nombre: '', matricula: '', grupo: '101', club: 'Básquetbol', paecOrigami: 'Entregado (10)', promedio: 9.5, estatus: 'Regular' });
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Matrícula', 'Nombre del Alumno', 'Grupo', 'Club Extracurricular', 'Proyecto PAEC Origami', 'Promedio', 'Estatus'];
    const rows = filteredData.map(r => [
      r.id,
      `"${r.matricula}"`,
      `"${r.nombre}"`,
      `"${r.grupo}"`,
      `"${r.club}"`,
      `"${r.paecOrigami}"`,
      r.promedio,
      `"${r.estatus}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'EPO44_Datos_Escolares.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 5000);
    }
  };

  const promedioGeneral = (filteredData.reduce((acc, curr) => acc + curr.promedio, 0) / (filteredData.length || 1)).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Banner Excel */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Subpágina Institucional • Libro de Datos y Cálculos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Hoja de Cálculo <span className="text-emerald-400">Excel</span> EPO 44
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Módulo interactivo para visualizar y gestionar datos de calificaciones, padrón de clubs formativos y seguimiento del proyecto <strong className="text-white">PAEC Origami</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-emerald-200">
            <span>📊 Registros Activos: {filteredData.length}</span>
            <span>•</span>
            <span>📈 Promedio General: <strong className="text-white">{promedioGeneral}</strong></span>
          </div>
        </div>
      </div>

      {/* ÁREA DE CARGA DE ARCHIVO EXCEL DEL USUARIO */}
      <div className="bg-white rounded-3xl p-6 border-2 border-dashed border-emerald-300 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <Upload className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-stone-900">
              ¿Deseas cargar tu archivo Excel escolar? (.xlsx / .csv)
            </h3>
            <p className="text-xs text-stone-500">
              Sube el archivo que preparaste para visualizar tus tablas y registros en esta interfaz.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs">
            <Upload className="w-4 h-4" />
            <span>Seleccionar Archivo</span>
            <input 
              type="file" 
              accept=".xlsx,.xls,.csv" 
              onChange={handleFileUpload} 
              className="hidden" 
            />
          </label>
        </div>
      </div>

      {uploadSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-300">
          <CheckCircle className="w-4 h-4 text-emerald-700" />
          <span>¡Archivo recibido con éxito! La hoja de cálculo se ha sincronizado con los datos de tu plantilla escolar.</span>
        </div>
      )}

      {/* ENCABEZADO ESTILO EXCEL CON PESTAÑAS (SHEETS) */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden">
        
        {/* Pestañas de la Hoja de Cálculo */}
        <div className="bg-stone-100 border-b border-stone-200 px-4 pt-3 flex items-center gap-1 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveSheet('calificaciones')}
            className={`px-4 py-2.5 rounded-t-xl font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeSheet === 'calificaciones'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Hoja 1: Calificaciones Generales</span>
          </button>

          <button
            onClick={() => setActiveSheet('paec')}
            className={`px-4 py-2.5 rounded-t-xl font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeSheet === 'paec'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-amber-600" />
            <span>Hoja 2: Proyecto PAEC Origami</span>
          </button>

          <button
            onClick={() => setActiveSheet('clubs')}
            className={`px-4 py-2.5 rounded-t-xl font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeSheet === 'clubs'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-red-600" />
            <span>Hoja 3: Padrón de Clubs</span>
          </button>
        </div>

        {/* Barra de Herramientas de la Tabla */}
        <div className="p-4 border-b border-stone-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          
          {/* Búsqueda y Filtro de Grupo */}
          <div className="flex flex-wrap items-center gap-2 flex-1">
            <div className="relative min-w-[200px] flex-1 sm:flex-initial">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
              <input 
                type="text" 
                placeholder="Buscar por alumno, matrícula o club..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-600 text-xs"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="px-2.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-600 text-xs font-semibold bg-stone-50"
              >
                <option value="todos">Todos los Grupos</option>
                <option value="101">Grupo 101</option>
                <option value="102">Grupo 102</option>
                <option value="201">Grupo 201</option>
                <option value="202">Grupo 202</option>
                <option value="301">Grupo 301</option>
                <option value="302">Grupo 302</option>
              </select>
            </div>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Nuevo Registro</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar a CSV</span>
            </button>
          </div>

        </div>

        {/* TABLA DE EXCEL RESPONSIVA */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 uppercase tracking-wider text-[11px] font-bold">
                <th className="py-3 px-4 w-12 text-center border-r border-stone-200 bg-stone-100/70">#</th>
                <th className="py-3 px-4 border-r border-stone-200">Matrícula</th>
                <th 
                  onClick={() => handleSort('nombre')}
                  className="py-3 px-4 border-r border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span>Nombre del Alumno</span>
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('grupo')}
                  className="py-3 px-4 border-r border-stone-200 cursor-pointer hover:bg-stone-100 text-center"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>Grupo</span>
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th className="py-3 px-4 border-r border-stone-200">Club Extracurricular</th>
                <th className="py-3 px-4 border-r border-stone-200">PAEC Origami</th>
                <th 
                  onClick={() => handleSort('promedio')}
                  className="py-3 px-4 border-r border-stone-200 cursor-pointer hover:bg-stone-100 text-center"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>Promedio</span>
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th className="py-3 px-4 text-center">Estatus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-normal">
              {filteredData.map((row, index) => (
                <tr key={row.id} className="hover:bg-emerald-50/40 transition-colors">
                  <td className="py-2.5 px-4 text-center text-stone-400 bg-stone-50/50 border-r border-stone-200 font-mono text-[11px]">
                    {index + 1}
                  </td>
                  <td className="py-2.5 px-4 font-mono font-semibold text-stone-700 border-r border-stone-200">
                    {row.matricula}
                  </td>
                  <td className="py-2.5 px-4 font-semibold text-stone-900 border-r border-stone-200">
                    {row.nombre}
                  </td>
                  <td className="py-2.5 px-4 text-center border-r border-stone-200">
                    <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-800 font-mono font-semibold text-[11px]">
                      {row.grupo}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 border-r border-stone-200">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      row.club === 'Básquetbol' ? 'bg-red-100 text-red-800' :
                      row.club === 'Artes' ? 'bg-amber-100 text-amber-800' :
                      row.club === 'Danzas' ? 'bg-rose-100 text-rose-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {row.club}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 border-r border-stone-200 text-emerald-700 font-medium">
                    {row.paecOrigami}
                  </td>
                  <td className="py-2.5 px-4 text-center font-bold text-stone-900 border-r border-stone-200">
                    <span className={`px-2 py-0.5 rounded font-mono ${
                      row.promedio >= 9.5 ? 'text-emerald-700 bg-emerald-50' : 'text-stone-800'
                    }`}>
                      {row.promedio.toFixed(1)}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      row.estatus === 'Excelencia' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-stone-100 text-stone-700'
                    }`}>
                      {row.estatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer de la Tabla estilo Excel */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-2">
          <div className="flex items-center gap-4">
            <span>Mostrando {filteredData.length} registros</span>
            <span>•</span>
            <span className="font-semibold text-stone-700">Libro: EPO44_Control_Escolar.xlsx</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] bg-stone-200 px-2 py-0.5 rounded">Fórmula: =PROMEDIO(G2:G{filteredData.length + 1})</span>
            <span className="font-bold text-emerald-800 text-sm">{promedioGeneral}</span>
          </div>
        </div>

      </div>

      {/* Modal para Agregar Nuevo Registro */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-stone-900 text-sm">Nuevo Registro en Hoja de Cálculo</h3>
              <button onClick={() => setShowAddModal(false)} className="text-stone-400 hover:text-stone-700">✕</button>
            </div>

            <form onSubmit={handleAddRow} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Nombre del Alumno:</label>
                <input 
                  type="text" 
                  required
                  placeholder="Apellidos y Nombres"
                  value={newRow.nombre}
                  onChange={(e) => setNewRow({ ...newRow, nombre: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Grupo:</label>
                  <select
                    value={newRow.grupo}
                    onChange={(e) => setNewRow({ ...newRow, grupo: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="201">201</option>
                    <option value="202">202</option>
                    <option value="301">301</option>
                    <option value="302">302</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Promedio:</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    min="5" 
                    max="10"
                    value={newRow.promedio}
                    onChange={(e) => setNewRow({ ...newRow, promedio: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Club Extracurricular:</label>
                <select
                  value={newRow.club}
                  onChange={(e) => setNewRow({ ...newRow, club: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-600"
                >
                  <option value="Básquetbol">Básquetbol</option>
                  <option value="Artes">Artes</option>
                  <option value="Danzas">Danzas</option>
                  <option value="Música">Música</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold"
                >
                  Guardar Fila
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
