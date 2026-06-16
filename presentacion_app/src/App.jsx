import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Activity, AlertTriangle, ShieldCheck, Mail, RefreshCw, Brain, Settings, Users, ArrowRight, CheckCircle2, Zap, Database, ServerCog, FileText, Check, Bot, TrendingDown, Clock, Target, AlertCircle, Layers, Workflow, BarChart2, Search, Bell, Info, LineChart, User, CheckCircle, Lightbulb } from 'lucide-react';
import logoSura from './assets/logo-sura.svg';

// --- COMPONENTES BASE ---
const SlideHeader = ({ title, subtitle, isDark = false }) => (
  <header className={`flex items-center justify-between px-10 py-8 flex-shrink-0 z-10 relative ${isDark ? 'text-white' : 'text-sura-blue-vivo'}`}>
    <div className="flex items-center gap-4">
      <img src={logoSura} alt="SURA" className={`h-10 object-contain ${isDark ? 'brightness-0 invert opacity-95' : 'drop-shadow-sm'}`} />
      <span className={`px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest border rounded-md shadow-sm ${isDark ? 'border-white/30 text-white bg-white/10' : 'border-sura-blue-vivo/30 text-sura-blue-vivo bg-sura-blue-vivo/5'}`}>Seguros</span>
    </div>
    <div className="text-right">
      <h2 className="text-sm font-black uppercase tracking-widest opacity-80">{title}</h2>
      {subtitle && <p className="text-xs font-semibold opacity-60 mt-1">{subtitle}</p>}
    </div>
  </header>
);

const NavDots = ({ current, total, setSlide }) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-sura-dark/95 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 z-50 shadow-2xl">
    <button onClick={() => setSlide(Math.max(0, current - 1))} className="p-1.5 rounded-full hover:bg-white/15 text-white/70 hover:text-sura-yellow transition-colors"><ChevronLeft size={24} /></button>
    <div className="flex items-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} onClick={() => setSlide(i)} className={`h-3 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-sura-yellow shadow-[0_0_12px_rgba(209,245,0,0.6)]' : 'w-3 bg-white/30 hover:bg-white/60'}`} />
      ))}
    </div>
    <button onClick={() => setSlide(Math.min(total - 1, current + 1))} className="p-1.5 rounded-full hover:bg-white/15 text-white/70 hover:text-sura-yellow transition-colors"><ChevronRight size={24} /></button>
    <span className="text-sm font-mono text-white/60 ml-4 w-10 text-center font-bold">{current + 1} / {total}</span>
  </div>
);

// --- SLIDES ---

const Slide0Cover = () => (
  <div className="flex-1 flex flex-col lg:flex-row h-full">
    <div className="flex-1 flex flex-col justify-center px-12 lg:px-20 z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-4 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full w-fit mb-10 shadow-lg backdrop-blur-md">
        <div className="w-10 h-10 rounded-full bg-sura-yellow text-sura-blue-vivo flex items-center justify-center font-black text-sm">KS</div>
        <span className="text-base font-bold text-white/95">Kevin Danilo Salazar Acosta · Candidato</span>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl lg:text-[5rem] font-black leading-[1.05] tracking-tight mb-8">
        Rediseño Operativo:<br />
        <span className="text-sura-yellow drop-shadow-xl inline-block mt-2">Actualización de Datos</span><br />
        de Clientes
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-white/80 max-w-3xl leading-relaxed mb-12 font-medium">
        Análisis y arquitectura de solución para transformar un proceso manual intensivo en un flujo optimizado con Microsoft Power Platform, UiPath y criterio humano de automatización.
      </motion.p>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap shadow-2xl border border-white/20 rounded-3xl overflow-hidden w-fit bg-white/5 backdrop-blur-md divide-x divide-white/10">
        {[
          { label: 'Volumen Base', value: '320 sol./día' },
          { label: 'Tiempo Promedio (AHT)', value: '8 – 13 min' },
          { label: 'Proc. Directo (STP)', value: '≥ 87.5%' },
          { label: 'Ahorro Proyectado', value: '~38 h/día' }
        ].map((kpi, i) => (
          <div key={i} className="px-8 py-5 flex flex-col gap-1.5 hover:bg-white/5 transition-colors">
            <span className="text-xs font-bold tracking-widest uppercase text-white/50">{kpi.label}</span>
            <span className="text-2xl font-black text-white">{kpi.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
    
    <div className="flex-1 hidden lg:flex items-center justify-center relative overflow-hidden">
      <motion.div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sura-cyan/20 rounded-full blur-[120px]" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity }} />
      <motion.div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-sura-yellow/10 rounded-full blur-[100px]" animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, delay: 2 }} />
      
      <motion.div className="relative w-full max-w-2xl aspect-square flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <div className="absolute w-[80%] h-[80%] border border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[60%] h-[60%] border border-white/5 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]" />
        
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-12 rounded-[3rem] shadow-2xl flex flex-col items-center gap-8">
          <div className="flex gap-6 items-center">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-sura-blue-vivo"><FileText size={48} strokeWidth={1.5} /></motion.div>
            <ArrowRight className="text-white/40" size={32} />
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }} className="w-32 h-32 bg-sura-cyan rounded-3xl shadow-[0_0_40px_rgba(0,180,230,0.5)] flex items-center justify-center text-white"><Settings size={64} strokeWidth={1.5} /></motion.div>
            <ArrowRight className="text-white/40" size={32} />
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "easeInOut" }} className="w-24 h-24 bg-sura-yellow rounded-3xl shadow-xl flex items-center justify-center text-sura-dark"><Zap size={48} strokeWidth={1.5} /></motion.div>
          </div>
          <div className="text-center mt-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-sura-green/20 text-sura-green font-bold text-sm mb-3 uppercase tracking-widest border border-sura-green/30">Orquestación Total</div>
            <h3 className="font-black text-3xl text-white">Hiperautomatización</h3>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide1Problem = () => {
  return (
    <div className="flex-1 flex flex-col px-12 lg:px-20 pb-32 pt-4 overflow-y-auto slide-content text-sura-dark">
      <div className="mb-10">
        <span className="text-sura-red text-sm font-black tracking-widest uppercase flex items-center gap-3 mb-3"><div className="w-8 h-[3px] bg-sura-red"></div> Diagnóstico Operativo</span>
        <h2 className="text-[2.75rem] leading-tight font-black text-sura-blue-vivo">La Trampa del Correo y el Swivel Chair</h2>
        <p className="text-sura-dark/70 text-xl mt-4 max-w-4xl font-medium">Un proceso netamente transaccional está secuestrando la capacidad cognitiva del equipo. El correo genera ambigüedad estructural, reprocesos continuos y ceguera operativa.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1">
        <div className="flex flex-col justify-between gap-4">
          {[
            { icon: <Mail size={28} strokeWidth={2}/>, title: 'Cero estandarización en el ingreso', desc: 'Texto libre vía correo. Formato diferente cada vez, imposible de parsear sin esfuerzo humano.' },
            { icon: <RefreshCw size={28} strokeWidth={2}/>, title: 'Reprocesos por Swivel Chair', desc: 'Analista lee, busca en BD. Devolver por datos faltantes suma +5 min y rompe el flujo.' },
            { icon: <Brain size={28} strokeWidth={2}/>, title: 'Cognitivo vs Transaccional', desc: 'El analista aporta cero valor en validación rutinaria, pero invierte todo su tiempo disponible ahí.' },
            { icon: <AlertTriangle size={28} strokeWidth={2}/>, title: 'Desgaste y ceguera', desc: 'Sin feedback para el usuario. Analista saturado. Líder sin visibilidad de la volumetría.' }
          ].map((pain, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all h-full">
              <div className="w-16 h-16 rounded-2xl bg-sura-red/10 text-sura-red flex items-center justify-center shrink-0">{pain.icon}</div>
              <div className="flex flex-col justify-center">
                <h4 className="font-extrabold text-xl text-sura-blue mb-1">{pain.title}</h4>
                <p className="text-sm text-sura-dark/60 leading-relaxed font-medium">{pain.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-6 h-full">
          {/* Gráfica 1: Impacto en AHT */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-center h-1/2 shadow-lg shadow-slate-200/50">
            <h4 className="text-sm font-black uppercase tracking-widest text-sura-cyan mb-8 text-center flex items-center justify-center gap-2"><Clock size={18}/> Tiempo Promedio de Gestión — AHT (Feliz vs Excepción)</h4>
            
            <div className="flex flex-col gap-6 px-4">
              <div className="relative">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-extrabold text-sura-blue">Ruta Feliz</span>
                  <span className="font-black text-2xl text-sura-blue">8 <span className="text-sm text-sura-blue/50">min</span></span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-6 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '61%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-sura-cyan h-full rounded-full relative overflow-hidden">
                     <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" style={{backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'}}></div>
                  </motion.div>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-extrabold text-sura-red flex items-center gap-2">Con Excepción <span className="bg-sura-red/10 text-sura-red text-xs px-2 py-0.5 rounded-full border border-sura-red/20">+62% Tiempo</span></span>
                  <span className="font-black text-2xl text-sura-red">13 <span className="text-sm text-sura-red/50">min</span></span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-6 overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-sura-yellow h-full rounded-full relative overflow-hidden">
                     <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" style={{backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'}}></div>
                   </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gráfica 2: Composición Demanda */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-center h-1/2 shadow-lg shadow-slate-200/50">
            <h4 className="text-sm font-black uppercase tracking-widest text-sura-cyan mb-8 text-center flex items-center justify-center gap-2"><Target size={18}/> Composición de Demanda (320 Casos/Día)</h4>
            
            <div className="px-4">
              {/* Barra segmentada */}
              <div className="w-full h-10 flex rounded-xl overflow-hidden shadow-inner mb-6">
                <motion.div initial={{ width: 0 }} animate={{ width: '37.5%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-sura-blue h-full flex items-center justify-center text-white font-bold text-xs border-r border-white/20">37%</motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: '29.7%' }} transition={{ duration: 1, delay: 0.6 }} className="bg-sura-cyan h-full flex items-center justify-center text-white font-bold text-xs border-r border-white/20">30%</motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: '20.3%' }} transition={{ duration: 1, delay: 0.7 }} className="bg-sura-green h-full flex items-center justify-center text-white font-bold text-xs border-r border-white/20">20%</motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: '12.5%' }} transition={{ duration: 1, delay: 0.8 }} className="bg-sura-yellow h-full flex items-center justify-center text-sura-dark font-bold text-xs">13%</motion.div>
              </div>
              
              {/* Leyenda */}
              <div className="flex flex-wrap justify-between gap-4">
                 {[
                  { color: 'bg-sura-blue', label: 'Correo', val: 120 },
                  { color: 'bg-sura-cyan', label: 'Celular', val: 95 },
                  { color: 'bg-sura-green', label: 'Dirección', val: 65 },
                  { color: 'bg-sura-yellow', label: 'Nombre', val: 40 }
                 ].map((leg, i) => (
                   <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl">
                     <div className={`w-4 h-4 rounded-full ${leg.color}`}></div>
                     <div className="flex flex-col">
                       <span className="text-xs font-bold text-sura-dark/60 uppercase">{leg.label}</span>
                       <span className="text-lg font-black text-sura-blue">{leg.val}</span>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            <p className="text-center text-[11px] mt-6 text-sura-dark/50 font-bold px-4 uppercase tracking-wider"><AlertTriangle size={12} className="inline mr-1 -mt-0.5"/> Las 30 devoluciones son reprocesos, no demanda nueva.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Slide2AsIs = () => (
  <div className="flex-1 flex flex-col px-12 lg:px-20 pb-32 pt-4 h-full text-sura-dark">
    <div className="mb-12">
      <span className="text-sura-red text-sm font-black tracking-widest uppercase flex items-center gap-3 mb-3"><div className="w-8 h-[3px] bg-sura-red"></div> Análisis de Flujo</span>
      <h2 className="text-[2.75rem] leading-tight font-black text-sura-blue-vivo">AS-IS: El Cuello de Botella Manual</h2>
      <p className="text-sura-dark/70 text-xl mt-4 max-w-4xl font-medium">El flujo actual carece de integraciones sistémicas. Secuencia operativa dominada por el "Swivel Chair".</p>
    </div>

    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 flex-1 flex flex-col shadow-2xl shadow-slate-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-sura-red" />
      
      {/* Timeline Layout */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 w-full">
        <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-7xl relative">
          
          {[
            { step: 1, icon: <Mail size={32}/>, title: 'Llegada de Correo', desc: 'Texto libre', type: 'Dolor' },
            { step: 2, icon: <Brain size={32}/>, title: 'Interpretación', desc: 'Lectura humana', type: 'Manual' },
            { step: 3, icon: <Database size={32}/>, title: 'Búsqueda BD', desc: 'Sistema Legacy', type: 'Manual' },
            { step: 4, icon: <FileText size={32}/>, title: 'Validación', desc: 'Revisión visual', type: 'Manual' },
            { step: 5, icon: <RefreshCw size={32}/>, title: 'Devolución', desc: '+5 min reproceso', type: 'Reproceso' },
            { step: 6, icon: <ServerCog size={32}/>, title: 'Actualización', desc: 'Digitación manual', type: 'Riesgo' },
            { step: 7, icon: <CheckCircle2 size={32}/>, title: 'Confirmación', desc: 'Envío de correo', type: 'Manual' },
          ].map((item, i, arr) => (
            <React.Fragment key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="relative bg-slate-50 border border-slate-200 p-5 rounded-3xl flex flex-col items-center text-center shadow-md w-44 z-10">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-sura-blue text-white font-black flex items-center justify-center text-xs shadow-md">{item.step}</div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${item.type === 'Dolor' || item.type === 'Reproceso' || item.type === 'Riesgo' ? 'bg-red-100 text-sura-red' : 'bg-slate-200 text-sura-blue-vivo'}`}>
                  {item.icon}
                </div>
                <h4 className="font-extrabold text-sm text-sura-blue mb-1">{item.title}</h4>
                <p className="text-[11px] text-sura-dark/60 font-medium mb-3">{item.desc}</p>
                <span className={`mt-auto text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${item.type === 'Dolor' || item.type === 'Reproceso' || item.type === 'Riesgo' ? 'bg-red-100 text-sura-red' : 'bg-slate-200 text-sura-dark/50'}`}>{item.type}</span>
              </motion.div>
              {i < arr.length - 1 && (
                <div className="hidden lg:flex shrink-0">
                  <ArrowRight size={28} className="text-slate-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Adicionales Abajo */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <div className="px-6 py-3 bg-red-50 border border-red-200 rounded-full text-red-600 font-extrabold text-sm flex items-center gap-3 shadow-sm">
            <AlertTriangle size={18} strokeWidth={3} /> Proceso Transaccional tratado como Cognitivo
          </div>
          <div className="px-6 py-3 bg-red-50 border border-red-200 rounded-full text-red-600 font-extrabold text-sm flex items-center gap-3 shadow-sm">
            <AlertTriangle size={18} strokeWidth={3} /> AHT de hasta 13 min por error en origen
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide3ToBe = () => (
  <div className="flex-1 flex flex-col px-12 lg:px-20 pb-32 pt-4 h-full text-sura-dark">
    <div className="mb-12">
      <span className="text-sura-green text-sm font-black tracking-widest uppercase flex items-center gap-3 mb-3"><div className="w-8 h-[3px] bg-sura-green"></div> Arquitectura de Solución</span>
      <h2 className="text-[2.75rem] leading-tight font-black text-sura-blue-vivo">TO-BE: Orquestación Inteligente</h2>
      <p className="text-sura-dark/70 text-xl mt-4 max-w-4xl font-medium">Validación en origen y delegación mecánica a RPA. Secuencia automatizada con escalamiento por excepción.</p>
    </div>

    <div className="bg-white border border-sura-green/30 rounded-[2.5rem] p-10 flex-1 flex flex-col shadow-2xl shadow-green-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-sura-green" />
      
      {/* Timeline Layout */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 w-full">
        <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-7xl relative">
          
          {[
            { step: 1, icon: <FileText size={32}/>, title: 'Forms / Apps', desc: 'Ingreso Estructurado', type: 'Proc. Directo' },
            { step: 2, icon: <Settings size={32}/>, title: 'Power Automate', desc: 'Reglas y Ruteo', type: 'Auto' },
            { step: 3, icon: <Bot size={32}/>, title: 'RPA (UiPath)', desc: 'Validación Legacy', type: 'RPA' },
            { step: 4, icon: <Zap size={32}/>, title: 'Actualización', desc: 'Automática < 2 min', type: 'Proc. Directo' },
            { step: '!', icon: <Users size={32}/>, title: 'Excepciones', desc: 'Intervención Humana', type: 'Humano' },
            { step: 5, icon: <Activity size={32}/>, title: 'Power BI', desc: 'Dashboard Trazabilidad', type: 'BI' }
          ].map((item, i, arr) => (
             <React.Fragment key={i}>
               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="relative bg-slate-50 border border-slate-200 p-5 rounded-3xl flex flex-col items-center text-center shadow-md w-44 z-10 hover:-translate-y-1 transition-transform">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-sura-blue text-white font-black flex items-center justify-center text-xs shadow-md">{item.step}</div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-inner ${item.type === 'Humano' ? 'bg-sura-cyan/20 text-sura-cyan' : 'bg-sura-green/20 text-sura-green'}`}>
                  {item.icon}
                </div>
                <h4 className="font-extrabold text-sm text-sura-blue mb-1">{item.title}</h4>
                <p className="text-[11px] text-sura-dark/60 font-medium mb-3">{item.desc}</p>
                <span className={`mt-auto text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${item.type === 'Humano' ? 'bg-sura-cyan/20 text-sura-cyan' : 'bg-sura-green/20 text-sura-green'}`}>{item.type}</span>
              </motion.div>
              {i < arr.length - 1 && (
                <div className="hidden lg:flex shrink-0">
                  <ArrowRight size={28} className="text-slate-300" />
                </div>
              )}
             </React.Fragment>
          ))}
        </div>
        
        {/* Adicionales Abajo */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {['~87.5% Procesamiento Directo', '0 Solicitudes incompletas', 'Trazabilidad 100%', 'Analista enfocado en valor'].map((gain, i) => (
            <div key={i} className="px-6 py-3 bg-green-50 border border-sura-green/30 rounded-full text-sura-green font-extrabold text-sm flex items-center gap-3 shadow-sm">
              <CheckCircle2 size={18} strokeWidth={3} /> {gain}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Slide4Gov = () => (
  <div className="flex-1 flex flex-col px-12 lg:px-20 pb-32 pt-4 bg-slate-50 text-sura-dark h-full slide-content overflow-y-auto">
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
      <span className="text-sura-aqua text-sm font-black tracking-widest uppercase flex items-center gap-3 mb-3"><div className="w-8 h-[3px] bg-sura-aqua"></div> Gobernanza y Control</span>
      <h2 className="text-[2.75rem] leading-tight font-black text-sura-blue-vivo">Políticas, Riesgos y KPIs</h2>
      <p className="text-sura-dark/70 text-xl mt-4 max-w-4xl font-medium">Arquitectura de control: asegurando que la automatización genere el valor proyectado sin exponer a la compañía.</p>
    </motion.div>

    {/* Custom Bento Grid Implementation */}
    <div className="flex flex-col gap-6 flex-1 h-full pb-4">
      
      {/* Top Row: KPIs as Bento Grid themselves */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="w-full flex flex-col gap-4">
         <h3 className="text-xl font-black flex items-center gap-3 text-sura-blue ml-2"><Activity className="text-sura-green" size={24} strokeWidth={3}/> Tablero de Resultados</h3>
         <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: <Target size={24}/>, name: 'Procesamiento Directo — STP', from: '0%', to: '≥ 87.5%', color: 'text-sura-blue', bg: 'bg-blue-50', border: 'border-blue-200' },
              { icon: <Clock size={24}/>, name: 'Tiempo Promedio — AHT', from: '13 min', to: '≤ 2 min', color: 'text-sura-cyan', bg: 'bg-cyan-50', border: 'border-cyan-200' },
              { icon: <RefreshCw size={24}/>, name: 'Tasa de Reproceso', from: '9.4%', to: '0%', color: 'text-sura-green', bg: 'bg-green-50', border: 'border-green-200' },
              { icon: <AlertCircle size={24}/>, name: 'Tasa de Errores', from: 'Frecuentes', to: '≤ 0.5%', color: 'text-sura-yellow', bg: 'bg-yellow-50', border: 'border-yellow-200', textDark: true },
              { icon: <TrendingDown size={24}/>, name: 'Ahorro Operativo', from: '45h/día', to: '7h/día', color: 'text-sura-blue-vivo', bg: 'bg-blue-50', border: 'border-blue-200' },
            ].map((k, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className={`relative p-5 rounded-[1.5rem] border ${k.border} ${k.bg} shadow-lg shadow-slate-200/50 flex flex-col justify-between overflow-hidden group min-h-[8rem]`}>
                <div className={`mb-3 opacity-80 ${k.color}`}>{k.icon}</div>
                <div className="z-10">
                  <span className={`text-xs font-black uppercase block mb-3 leading-tight ${k.textDark ? 'text-sura-dark' : k.color}`}>{k.name}</span>
                  <div className="flex items-center justify-between gap-2 font-mono">
                    <span className="text-slate-400 line-through text-base font-bold">{k.from}</span>
                    <ArrowRight size={16} className="text-slate-300" />
                    <span className={`font-black text-3xl tracking-tight ${k.textDark ? 'text-sura-dark' : k.color}`}>{k.to}</span>
                  </div>
                <div className={`absolute -bottom-6 -right-6 opacity-[0.05] transition-transform duration-500 group-hover:scale-125 pointer-events-none ${k.textDark ? 'text-sura-dark' : k.color}`}>
                  {k.icon}
                </div>
              </motion.div>
             ))}
         </div>
      </motion.div>

      {/* Bottom Row: Reglas & Riesgos */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full flex-1">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 flex flex-col group overflow-hidden relative">
          <div className="flex items-center justify-between mb-6 z-10">
            <h3 className="text-2xl font-black flex items-center gap-4 text-sura-blue"><ShieldCheck className="text-sura-aqua" size={32} strokeWidth={2.5}/> Reglas de Negocio</h3>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 z-10 overflow-y-auto slide-content pr-2">
            {[
              { c: 'RN-01 CERO CORREO', t: 'Toda solicitud ingresa por formulario.' },
              { c: 'RN-02 TIPIFICACIÓN', t: 'Obligatoria y forzada desde el origen.' },
              { c: 'RN-03 VALIDACIÓN VIVO', t: 'Email regex, celular 10 dígitos.' },
              { c: 'RN-04 EXCEPCIÓN NOMBRES', t: 'Corrección de nombre requiere intervención humana (HITL).', critical: true },
            ].map((r, i) => (
              <div key={i} className={`p-4 rounded-2xl border transition-all hover:-translate-y-0.5 ${r.critical ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
                <span className={`font-black text-sm block mb-1 uppercase tracking-wider ${r.critical ? 'text-red-700' : 'text-sura-blue-vivo'}`}>{r.c}</span>
                <p className={`text-sm font-medium ${r.critical ? 'text-red-900' : 'text-slate-700'}`}>{r.t}</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-sura-blue transition-transform duration-500 group-hover:scale-110 pointer-events-none">
            <ShieldCheck size={250} />
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 flex flex-col group overflow-hidden relative">
          <div className="flex items-center justify-between mb-6 z-10">
            <h3 className="text-2xl font-black flex items-center gap-4 text-sura-blue"><AlertTriangle className="text-sura-red" size={32} strokeWidth={2.5}/> Matriz de Riesgos</h3>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 z-10 overflow-y-auto slide-content pr-2">
            {[
              { lvl: 'CRÍTICO', color: 'bg-red-100 text-red-700 border-red-200', t: 'Automatizar sin rediseñar', d: 'Poner RPA a leer correos.' },
              { lvl: 'ALTO', color: 'bg-orange-100 text-orange-700 border-orange-200', t: 'ROI inflado', d: 'No descontar reprocesos del volumen.' },
              { lvl: 'MEDIO', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', t: 'Resistencia al cambio', d: 'Analista teme perder control. Capacitar.' },
              { lvl: 'MEDIO', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', t: 'Baja Adopción', d: 'Responder automático con link al form.' },
            ].map((r, i) => (
              <div key={i} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded border tracking-widest ${r.color}`}>{r.lvl}</span>
                  <h4 className="font-extrabold text-sura-dark text-sm truncate">{r.t}</h4>
                </div>
                <p className="text-xs text-sura-dark/60 font-medium leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-sura-red transition-transform duration-500 group-hover:scale-110 pointer-events-none">
            <AlertTriangle size={250} />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide5Tech = () => (
  <div className="flex-1 flex flex-col px-12 lg:px-20 pb-32 pt-4 bg-slate-50 text-sura-dark h-full overflow-hidden slide-content">
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8 shrink-0">
      <span className="text-sura-blue-vivo text-xs font-black tracking-widest uppercase flex items-center gap-3 mb-2"><div className="w-8 h-[2px] bg-sura-blue-vivo"></div> Stack y Criterio de Datos</span>
      <h2 className="text-4xl leading-tight font-black text-sura-blue-vivo">Stack, Análisis de Volumen y Uso de IA</h2>
      <p className="text-sura-dark/70 text-base mt-2 max-w-4xl font-medium">Arquitectura Microsoft Power Platform + UiPath, análisis de volumen y declaración de uso de IA.</p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-0">
      
      {/* LEFT COLUMN: Stack (span 3/12) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="col-span-3 bg-white border border-slate-200 rounded-[2rem] p-6 shadow-lg flex flex-col relative overflow-hidden">
        <h3 className="text-base font-black text-sura-blue mb-6 flex items-center gap-2"><Layers size={20} className="text-sura-blue-vivo" /> Stack Propuesto</h3>
        
        <div className="flex flex-col flex-1 justify-between min-h-0">
          {/* Item 1 */}
          <div className="flex flex-col">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md w-fit mb-1.5">INTERFAZ</span>
            <div className="flex items-center gap-4 bg-slate-50/80 p-3 xl:p-4 rounded-[1.25rem] border border-slate-100 shadow-sm">
              <Layers className="text-purple-600 shrink-0" size={32} />
              <div>
                <h4 className="font-extrabold text-sura-blue text-[15px] leading-tight mb-1">Power Apps / Forms</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Captura estructurada y validación en origen mediante reglas en tiempo real.</p>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md w-fit mb-1.5">MOTOR</span>
            <div className="flex items-center gap-4 bg-slate-50/80 p-3 xl:p-4 rounded-[1.25rem] border border-slate-100 shadow-sm">
              <Workflow className="text-blue-500 shrink-0" size={32} />
              <div>
                <h4 className="font-extrabold text-sura-blue text-[15px] leading-tight mb-1">Power Automate</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Orquestador core: enrutamiento lógico, control de estado y ETL de datos.</p>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md w-fit mb-1.5">RPA</span>
            <div className="flex items-center gap-4 bg-slate-50/80 p-3 xl:p-4 rounded-[1.25rem] border border-slate-100 shadow-sm">
              <div className="w-[32px] h-[32px] rounded-lg bg-white border-2 border-[#FA4616] flex items-center justify-center shrink-0">
                 <span className="text-[#FA4616] font-black text-[15px] leading-none">Ui</span>
              </div>
              <div>
                <h4 className="font-extrabold text-sura-blue text-[15px] leading-tight mb-1">UiPath (RPA)</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Interacción automatizada con sistemas core (legacy) sin fricciones.</p>
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md w-fit mb-1.5">DATOS</span>
            <div className="flex items-center gap-4 bg-slate-50/80 p-3 xl:p-4 rounded-[1.25rem] border border-slate-100 shadow-sm">
              <BarChart2 className="text-yellow-500 shrink-0" size={32} />
              <div>
                <h4 className="font-extrabold text-sura-blue text-[15px] leading-tight mb-1">Power BI / Dataverse</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Dashboards de volumetría, cuellos de botella y adopción del modelo.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CENTER COLUMN: Volumen + STP/HITL (span 6/12) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="col-span-6 flex flex-col gap-5 min-h-0">
        
        {/* Volumen Card */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-lg flex flex-col relative justify-center">
          <h3 className="text-base font-black text-sura-blue mb-5 flex items-center gap-2"><LineChart size={20} className="text-sura-blue-vivo"/> Análisis de Volumen · Criterio Propio</h3>
          
          <div className="flex gap-4 mb-6">
             {/* A Block */}
             <div className="flex-1 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
               <h4 className="text-[10px] font-black tracking-widest uppercase text-slate-500 mb-2">A — 5 Min en Promedio</h4>
               <p className="text-xl font-black text-sura-blue tracking-tight">320 × 8m = <span className="text-sura-red">2,560m</span> = 42.7h</p>
             </div>
             {/* B Block */}
             <div className="flex-1 p-4 rounded-2xl bg-sura-blue/5 border border-sura-blue/10 flex flex-col justify-center relative">
               <h4 className="text-[10px] font-black tracking-widest uppercase text-sura-blue mb-2">B — 5 Min Adicionales <span className="text-[9px] font-semibold text-sura-blue/70">(Base)</span></h4>
               <p className="text-xl font-black text-sura-blue tracking-tight">290 × 8 + 30×13 = <span className="text-sura-blue">2,710m</span> = 45.2h</p>
               <span className="text-[9px] font-bold text-sura-blue/80 mt-1 absolute bottom-2 right-4">+5.8% mediante IA (vs. Cálculo A)</span>
             </div>
          </div>
          
          {/* Progress Bars (Reverted to AS-IS / TO-BE) */}
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
             <div className="flex-1">
               <div className="flex justify-between items-center mb-1"><span className="text-[11px] font-bold">AS-IS</span><span className="text-[11px] font-black text-sura-blue">45.2h</span></div>
               <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden"><div className="bg-sura-blue h-full" style={{width: '100%'}}></div></div>
             </div>
             <div className="flex-1">
               <div className="flex justify-between items-center mb-1"><span className="text-[11px] font-bold">TO-BE</span><span className="text-[11px] font-black text-sura-cyan">~7.0h</span></div>
               <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden"><div className="bg-sura-cyan h-full" style={{width: '15%'}}></div></div>
             </div>
          </div>
        </div>

        {/* STP & HITL Row */}
        <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
           {/* STP */}
           <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-lg flex flex-col justify-between">
             <h4 className="text-[14px] font-black text-sura-blue mb-4 flex items-center gap-2">
               <Zap className="text-sura-blue-vivo" size={20} /> 
               Procesamiento Directo (STP)
             </h4>
             <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-4 flex-1">
               {[
                 { name: 'Val. Formatos', icon: FileText, desc: 'Verifica estructura e integridad del input.' },
                 { name: 'Búsqueda BD', icon: Search, desc: 'Consulta automática de registros previos.' },
                 { name: 'Actualizar', icon: RefreshCw, desc: 'Modificación directa de la base de datos.' },
                 { name: 'Notificar', icon: Bell, desc: 'Envío de alertas automáticas vía email.' }
               ].map(tag => (
                 <div key={tag.name} className="bg-slate-50 p-3 rounded-[1rem] border border-slate-100 flex flex-col justify-center hover:border-sura-cyan/50 hover:bg-sura-cyan/5 transition-colors">
                   <div className="flex items-center gap-1.5 mb-1.5">
                     <tag.icon size={14} className="text-sura-cyan shrink-0"/>
                     <span className="text-[13px] font-extrabold text-sura-blue leading-tight">{tag.name}</span>
                   </div>
                   <p className="text-[11px] text-slate-500 font-medium leading-tight">{tag.desc}</p>
                 </div>
               ))}
             </div>
             <div className="flex items-start gap-2 text-slate-500 mt-auto">
               <Info size={14} className="shrink-0 mt-0.5 text-sura-cyan" />
               <span className="text-[10px] font-medium leading-tight">Flujos automáticos sin intervención manual.</span>
             </div>
           </div>

           {/* HITL */}
           <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-lg flex flex-col justify-between">
             <h4 className="text-[14px] font-black text-sura-blue mb-4 flex items-center gap-2">
               <User className="text-sura-blue-vivo" size={20} /> 
               Intervención Humana (HITL)
             </h4>
             <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-4 flex-1">
               {[
                 { name: 'Monitoreo', icon: Activity, desc: 'Revisión constante del flujo de trabajo.' },
                 { name: 'No Encontrado', icon: Target, desc: 'Gestión de registros sin coincidencias.' },
                 { name: 'Inconsistencias', icon: AlertTriangle, desc: 'Resolución de errores de formato/datos.' },
                 { name: 'Creación RD', icon: Database, desc: 'Creación manual justificada en sistema.' }
               ].map(tag => (
                 <div key={tag.name} className="bg-slate-50 p-3 rounded-[1rem] border border-slate-100 flex flex-col justify-center hover:border-sura-blue-vivo/50 hover:bg-sura-blue-vivo/5 transition-colors">
                   <div className="flex items-center gap-1.5 mb-1.5">
                     <tag.icon size={14} className="text-sura-blue-vivo shrink-0"/>
                     <span className="text-[13px] font-extrabold text-sura-blue leading-tight">{tag.name}</span>
                   </div>
                   <p className="text-[11px] text-slate-500 font-medium leading-tight">{tag.desc}</p>
                 </div>
               ))}
             </div>
             <div className="flex items-start gap-2 text-slate-500 mt-auto">
               <Info size={14} className="shrink-0 mt-0.5 text-sura-blue-vivo" />
               <span className="text-[10px] font-medium leading-tight">Manejo de excepciones y validaciones críticas.</span>
             </div>
           </div>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: IA (span 3/12) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="col-span-3 bg-gradient-to-br from-sura-blue to-[#0A1A3A] border border-sura-blue/50 rounded-[2rem] p-6 shadow-xl flex flex-col relative overflow-hidden">
        <div className="z-10 relative flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-[20px] font-black text-white mb-5 leading-tight flex items-center gap-3">
              <Bot className="text-sura-yellow shrink-0" size={24}/>
              Declaración de Uso de IA
            </h3>
            <p className="text-white/90 text-[13px] leading-relaxed font-medium mb-6">
              Uso de modelos generativos (Gemini / Claude) como <strong className="text-white bg-white/20 px-2 py-0.5 rounded">"Sparring Partner"</strong> para retar la lógica matemática y estructurar hallazgos.
            </p>
          </div>
          
          <div className="bg-[#09152C]/60 rounded-[1.5rem] p-5 border border-white/10 mb-4 shadow-lg flex-1 overflow-y-auto custom-scrollbar">
            <h4 className="text-white font-black text-[14px] mb-4 flex items-center gap-2"><CheckCircle size={16} className="text-sura-yellow"/> Decisiones propias e Intelectuales</h4>
            <ul className="text-white/80 text-[13px] leading-relaxed space-y-3">
               <li className="flex items-start gap-2.5"><span className="text-sura-yellow font-black text-[8px] mt-1.5">◆</span> <span>Arquitectura escalable en <strong>Power Platform + UiPath</strong> desde cero.</span></li>
               <li className="flex items-start gap-2.5"><span className="text-sura-yellow font-black text-[8px] mt-1.5">◆</span> <span>Detección de la causa raíz en la <strong>inconsistencia operativa</strong> de datos.</span></li>
               <li className="flex items-start gap-2.5"><span className="text-sura-yellow font-black text-[8px] mt-1.5">◆</span> <span>Creación de lógicas de negocio para derivación a <strong>HITL</strong>.</span></li>
               <li className="flex items-start gap-2.5"><span className="text-sura-yellow font-black text-[8px] mt-1.5">◆</span> <span>Criterio de oro: <strong>NO automatizar</strong> procesos sin rediseñar el AS-IS.</span></li>
               <li className="flex items-start gap-2.5"><span className="text-sura-yellow font-black text-[8px] mt-1.5">◆</span> <span>Diseño de <strong>métricas operativas (KPIs)</strong> y modelado de impacto.</span></li>
               <li className="flex items-start gap-2.5"><span className="text-sura-yellow font-black text-[8px] mt-1.5">◆</span> <span>Estructuración de <strong>UX/UI</strong> y arquitectura de la información.</span></li>
            </ul>
          </div>
          
          <div className="flex items-start gap-3 text-blue-200/90 bg-white/5 p-3 rounded-xl border border-white/10 mt-auto">
             <Info size={16} className="shrink-0 mt-0.5 text-sura-cyan" />
             <span className="text-[10px] font-medium leading-relaxed">La Inteligencia Artificial fungió como un acelerador. Las definiciones y lógica son <strong>100% de criterio propio.</strong></span>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
);

export default function App() {
  const [slide, setSlide] = useState(0);
  const slides = [<Slide0Cover />, <Slide1Problem />, <Slide2AsIs />, <Slide3ToBe />, <Slide4Gov />, <Slide5Tech />];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') setSlide(s => Math.min(slides.length - 1, s + 1));
      if (e.key === 'ArrowLeft') setSlide(s => Math.max(0, s - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  const isDarkSlide = slide === 0;

  return (
    <div className={`h-screen w-screen flex flex-col transition-colors duration-700 ${isDarkSlide ? 'bg-sura-blue' : 'bg-slate-50'}`}>
      <SlideHeader title={['Portada', 'Problema', 'AS-IS', 'TO-BE', 'Gobernanza', 'Tecnología'][slide]} isDark={isDarkSlide} />
      
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col"
          >
            {slides[slide]}
          </motion.div>
        </AnimatePresence>
      </div>

      <NavDots current={slide} total={slides.length} setSlide={setSlide} />
    </div>
  );
}
