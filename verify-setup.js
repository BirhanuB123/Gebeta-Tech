#!/usr/bin/env node

/**
 * Gebeta Tech Website - Setup Verification Script
 * This script checks if everything is properly installed and configured
 */

const fs = require('fs');
const path = require('path');

console.log('\n╔═══════════════════════════════════════════════════════════════╗');
console.log('║       Gebeta Tech Website - Setup Verification               ║');
console.log('╚═══════════════════════════════════════════════════════════════╝\n');

let allChecks = true;

// Check 1: Node.js version
console.log('📦 Checking Node.js version...');
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
if (majorVersion >= 14) {
  console.log(`   ✅ Node.js ${nodeVersion} (OK)\n`);
} else {
  console.log(`   ❌ Node.js ${nodeVersion} (Need v14 or higher)\n`);
  allChecks = false;
}

// Check 2: Required directories
console.log('📁 Checking project structure...');
const requiredDirs = [
  'backend',
  'backend/models',
  'backend/routes',
  'client',
  'client/src',
  'client/src/components',
  'client/src/components/Navbar',
  'client/src/components/Hero',
  'client/src/components/Services',
  'client/src/components/About',
  'client/src/components/Portfolio',
  'client/src/components/Contact',
  'client/src/components/Footer'
];

let dirCheckPassed = true;
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`   ✅ ${dir}`);
  } else {
    console.log(`   ❌ ${dir} (Missing)`);
    dirCheckPassed = false;
    allChecks = false;
  }
});

if (dirCheckPassed) {
  console.log('   ✅ All directories present\n');
} else {
  console.log('   ❌ Some directories are missing\n');
}

// Check 3: Required files
console.log('📄 Checking required files...');
const requiredFiles = [
  'package.json',
  'backend/server.js',
  'backend/models/Contact.js',
  'backend/models/Newsletter.js',
  'backend/routes/contact.js',
  'backend/routes/newsletter.js',
  'client/package.json',
  'client/src/App.js',
  'client/src/App.css',
  'client/src/index.js'
];

let fileCheckPassed = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} (Missing)`);
    fileCheckPassed = false;
    allChecks = false;
  }
});

if (fileCheckPassed) {
  console.log('   ✅ All required files present\n');
} else {
  console.log('   ❌ Some files are missing\n');
}

// Check 4: Dependencies
console.log('📦 Checking dependencies...');
const rootNodeModules = fs.existsSync('node_modules');
const clientNodeModules = fs.existsSync('client/node_modules');

if (rootNodeModules) {
  console.log('   ✅ Root dependencies installed');
} else {
  console.log('   ❌ Root dependencies not installed (Run: npm install)');
  allChecks = false;
}

if (clientNodeModules) {
  console.log('   ✅ Client dependencies installed\n');
} else {
  console.log('   ❌ Client dependencies not installed (Run: cd client && npm install)\n');
  allChecks = false;
}

// Check 5: Environment file
console.log('⚙️  Checking environment configuration...');
if (fs.existsSync('.env')) {
  console.log('   ✅ .env file exists');
  const envContent = fs.readFileSync('.env', 'utf8');
  if (envContent.includes('MONGODB_URI')) {
    console.log('   ✅ MongoDB URI configured\n');
  } else {
    console.log('   ⚠️  MongoDB URI not configured\n');
  }
} else {
  console.log('   ⚠️  .env file not found (Optional, but recommended)\n');
}

// Check 6: Documentation
console.log('📚 Checking documentation...');
const docFiles = [
  'README.md',
  'START_HERE.md',
  'FEATURES.md',
  'DEPLOYMENT.md',
  'QUICK_REFERENCE.md',
  'PROJECT_SUMMARY.md',
  'CONGRATULATIONS.md'
];

let docCheckPassed = true;
docFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} (Missing)`);
    docCheckPassed = false;
  }
});

if (docCheckPassed) {
  console.log('   ✅ All documentation files present\n');
} else {
  console.log('   ⚠️  Some documentation files are missing\n');
}

// Final summary
console.log('═══════════════════════════════════════════════════════════════\n');

if (allChecks) {
  console.log('✅ ✅ ✅  ALL CHECKS PASSED! ✅ ✅ ✅\n');
  console.log('🎉 Your Gebeta Tech website is properly set up!\n');
  console.log('📋 Next Steps:');
  console.log('   1. Make sure MongoDB is running');
  console.log('   2. Run: npm run dev');
  console.log('   3. Open: http://localhost:3000\n');
  console.log('📚 Read START_HERE.md for detailed instructions\n');
} else {
  console.log('⚠️  SOME CHECKS FAILED\n');
  console.log('Please fix the issues above and run this script again.\n');
  console.log('💡 Common fixes:');
  console.log('   - Run: npm install');
  console.log('   - Run: cd client && npm install');
  console.log('   - Create .env file from .env.example\n');
}

console.log('═══════════════════════════════════════════════════════════════\n');

// Exit with appropriate code
process.exit(allChecks ? 0 : 1);

