# 🤝 Contributing to NaanFI

Thank you for your interest in contributing to NaanFI! This document provides guidelines and instructions for contributing.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of:
- Experience level
- Gender identity
- Sexual orientation
- Disability
- Ethnicity
- Religion
- Age

### Expected Behavior

- ✅ Be respectful and constructive
- ✅ Welcome newcomers and help them learn
- ✅ Focus on what's best for the project
- ✅ Accept constructive criticism gracefully
- ✅ Show empathy towards other contributors

### Unacceptable Behavior

- ❌ Harassment or discriminatory language
- ❌ Personal attacks or insults
- ❌ Trolling or inflammatory comments
- ❌ Publishing others' private information
- ❌ Any conduct inappropriate in a professional setting

---

## Getting Started

### Prerequisites

Before contributing, ensure you have:
- ✅ Read the [README.md](README.md)
- ✅ Reviewed [ARCHITECTURE.md](docs/ARCHITECTURE.md)
- ✅ Set up development environment (see README)
- ✅ Familiarized yourself with Algorand and PyTeal basics

### Development Setup

1. **Fork the Repository**
   ```bash
   # Click "Fork" button on GitHub
   # Then clone your fork
   git clone https://github.com/YOUR_USERNAME/naanfi-staking.git
   cd naanfi-staking
   ```

2. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/naanfi-staking.git
   ```

3. **Install Dependencies**
   ```bash
   # Backend
   pip install -r requirements.txt
   
   # Frontend
  cd frontend
   npm install
   ```

4. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## Development Workflow

### 1. Find or Create an Issue

- Check [existing issues](https://github.com/OWNER/naanfi-staking/issues)
- Comment on issue you want to work on
- Wait for assignment/approval
- For new features, create issue first for discussion

### 2. Keep Your Fork Updated

```bash
# Fetch latest changes
git fetch upstream

# Merge into your main branch
git checkout main
git merge upstream/main

# Rebase your feature branch
git checkout feature/your-feature-name
git rebase main
```

### 3. Make Changes

- Write clean, documented code
- Follow coding standards (see below)
- Test thoroughly
- Commit incrementally with clear messages

### 4. Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style/formatting (no logic change)
- `refactor:` Code restructuring (no behavior change)
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

**Examples:**
```bash
git commit -m "feat(staking): add 120-day lock period option"
git commit -m "fix(claim): handle null signature from mobile wallet"
git commit -m "docs: add troubleshooting guide for TestNet connection"
```

### 5. Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

---

## Coding Standards

### Python (PyTeal)

**Style Guide:** PEP 8

```python
# Good
def calculate_reward(amount: Expr, period: Expr, apr: Expr) -> Expr:
    """
    Calculate reward for staking position.
    
    Args:
        amount: Staked amount in microALGOs
        period: Lock period in seconds
        apr: Annual percentage rate (e.g., 5 for 5%)
    
    Returns:
        Reward amount in microALGOs
    """
    return WideRatio([amount, apr, period], [Int(100), Int(365 * 86400)])

# Bad
def calc_rwd(a,p,r):
    return WideRatio([a,r,p],[Int(100),Int(31536000)])
```

**Best Practices:**
- ✅ Use type hints
- ✅ Add docstrings to all functions
- ✅ Validate inputs with Assert
- ✅ Use meaningful variable names
- ✅ Keep functions small and focused
- ✅ Comment complex logic

### TypeScript/React

**Style Guide:** Airbnb + Prettier

```typescript
// Good
interface StakingPosition {
  assetId: number
  stakedAmount: number
  lockPeriod: number
  isMatured: boolean
}

const fetchPositions = async (): Promise<StakingPosition[]> => {
  try {
    const accountInfo = await algodClient.accountInformation(address).do()
    return parsePositions(accountInfo)
  } catch (error) {
    console.error('Failed to fetch positions:', error)
    throw new Error('Unable to load staking positions')
  }
}

// Bad
const fetchPos = async () => {
  const a = await algodClient.accountInformation(addr).do()
  return a
}
```

**Best Practices:**
- ✅ Use TypeScript strictly (`strict: true`)
- ✅ Define interfaces for all data structures
- ✅ Use async/await over promises
- ✅ Handle errors gracefully with try/catch
- ✅ Extract complex logic into utility functions
- ✅ Use functional components with hooks
- ✅ Add loading and error states

### File Organization

```typescript
// 1. Imports (grouped)
import { useState, useEffect } from 'react'
import * as algosdk from 'algosdk'
import { Card } from '@/components/ui/card'
import { useWallet } from '@/components/wallet-context'

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Constants
const ALGOD_SERVER = 'https://testnet-api.algonode.cloud'

// 4. Component
export function MyComponent({ prop }: Props) {
  // 4a. Hooks
  const [state, setState] = useState()
  const { wallet } = useWallet()
  
  // 4b. Effects
  useEffect(() => {
    // ...
  }, [dependency])
  
  // 4c. Handlers
  const handleClick = () => {
    // ...
  }
  
  // 4d. Render
  return (
    // JSX
  )
}
```

---

## Testing

### Smart Contract Testing

**Manual Testing Checklist:**

Before submitting contract changes, test:

- [ ] Deployment succeeds
- [ ] Stake with 30/60/90 day periods
- [ ] NFT creation and metadata storage
- [ ] Claim NFT flow (opt-in + claim)
- [ ] Redeem before maturity (should fail)
- [ ] Redeem after maturity (should succeed)
- [ ] Multiple concurrent positions
- [ ] Edge cases (0 amount, invalid period, etc.)

**Test on TestNet:**
```bash
# Deploy test contract
python scripts/deploy_with_asa.py

# Run test scenarios
python scripts/interact.py
```

### Frontend Testing

**Manual Testing Checklist:**

- [ ] Wallet connection (Pera browser extension)
- [ ] Stake flow (all 3 lock periods)
- [ ] Transaction signing and submission
- [ ] Error handling (rejected txn, insufficient funds)
- [ ] Position fetching and display
- [ ] Maturity calculations
- [ ] Redeem flow
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Browser compatibility (Chrome, Firefox, Edge)

**Test Script:**
```bash
# Start dev server
npm run dev

# In another terminal, run type checking
npm run type-check

# Check for build errors
npm run build
```

### Writing Tests (Future)

We welcome contributions for automated testing:

**Smart Contract Tests:**
```python
# tests/test_staking.py
import pytest
from algosdk import account, transaction
from staking_app import approval_program

def test_stake_creates_nft():
    # Setup
    sender = create_test_account()
    app_id = deploy_test_app()
    
    # Execute
    txn_group = create_stake_group(sender, app_id, amount=10_000_000)
    result = submit_and_wait(txn_group)
    
    # Assert
    assert result.inner_txns[0].type == 'acfg'
    assert get_global_state(app_id, f'NFT_S_{asset_id}') == 10_000_000
```

**Frontend Tests:**
```typescript
// __tests__/StakingForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { StakingForm } from '@/components/staking-form'

describe('StakingForm', () => {
  it('calculates reward correctly for 90-day period', () => {
    render(<StakingForm />)
    
    fireEvent.change(screen.getByLabelText('Amount'), { target: { value: '100' } })
    fireEvent.click(screen.getByText('90 Days'))
    
    expect(screen.getByText(/2.47 ALGO/)).toBeInTheDocument()
  })
})
```

---

## Submitting Changes

### Pull Request Checklist

Before submitting PR:

- [ ] Code follows style guidelines
- [ ] All tests pass (if applicable)
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow convention
- [ ] Branch is up-to-date with main
- [ ] No merge conflicts
- [ ] PR description is clear and complete

### PR Template

```markdown
## Description
Brief summary of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issue
Fixes #123

## Testing Done
- Tested on TestNet with account ABC...XYZ
- Staked 10 ALGO for 30 days
- Successfully redeemed after maturity
- Screenshots attached

## Checklist
- [x] Code follows project style
- [x] Self-review completed
- [x] Documentation updated
- [x] No console errors or warnings

## Screenshots (if applicable)
[Add screenshots here]
```

### Review Process

1. **Automated Checks**
   - CI/CD pipeline runs (if configured)
   - Linting and type checking
   - Build verification

2. **Code Review**
   - Maintainer reviews code
   - May request changes
   - Discussion on implementation

3. **Approval & Merge**
   - Once approved, PR will be merged
   - Squash merge for clean history
   - Your contribution is live! 🎉

---

## Reporting Bugs

### Before Reporting

1. **Check if already reported**
   - Search [existing issues](https://github.com/OWNER/naanfi-staking/issues)
   - Check closed issues too

2. **Reproduce the bug**
   - Can you reproduce it consistently?
   - Does it happen in incognito mode?
   - Does it happen with different wallet?

### Bug Report Template

```markdown
## Bug Description
Clear description of what happened

## Expected Behavior
What you expected to happen

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Enter '...'
4. See error

## Environment
- OS: Windows 11
- Browser: Chrome 120
- Wallet: Pera Wallet v1.4.2
- Network: TestNet

## Screenshots/Logs
[Paste console logs or screenshots]

## Transaction ID (if applicable)
ABC123...XYZ

## Additional Context
Any other relevant information
```

---

## Feature Requests

We welcome feature ideas! Please:

1. **Check existing requests** first
2. **Describe the problem** you're trying to solve
3. **Propose a solution** (optional)
4. **Consider alternatives** you've thought of

### Feature Request Template

```markdown
## Problem Statement
What problem does this feature solve?

## Proposed Solution
How should it work?

## Alternatives Considered
What other approaches did you think about?

## Additional Context
Mockups, examples, related projects, etc.
```

---

## Questions?

- **GitHub Discussions**: For general questions
- **Discord/Telegram**: (Add your community links)
- **Email**: (Add maintainer email)

---

## Recognition

All contributors will be:
- ✅ Listed in CONTRIBUTORS.md
- ✅ Mentioned in release notes
- ✅ Given credit in documentation

Thank you for making NaanFI better! 🚀

---

**Last Updated**: 2025-01-16
